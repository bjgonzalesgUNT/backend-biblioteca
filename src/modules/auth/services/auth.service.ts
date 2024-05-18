import {
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { QueryTypes } from 'sequelize';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { USER_REPOSITORY } from '../../../core/constants';
import { User } from '../../../modules/user/user.entity';
import { LoginDto } from '../dto/login.dto';
import { IUserDB } from '../interfaces';
import { IPayload } from '../interfaces/payload.interface';
import { handlerExceptions } from './../../../core/database/handlers/handler-exceptions';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: IUserDB) {
    const { usu_email } = user;
    const token = await this.generateToken({ usu_email });
    return { user, token };
  }

  async singUp(createUserDto: CreateUserDto) {
    try {
      const { email, password, personId } = createUserDto;

      //* CREATE A NEW USER
      const [newUser] = (await this.userRepository.sequelize.query(
        'SELECT * FROM sistemas.fn_crear_usuario(?,?,?)',
        {
          replacements: [email, this.hashPassword(password), personId],
          type: QueryTypes.SELECT,
        },
      )) as [{ data: IUserDB }];

      const { data: userData } = newUser;

      if (!userData) throw new InternalServerErrorException();

      //* GENERATE A TOKEN
      const payload: IPayload = { usu_email: userData.usu_email };

      const token = await this.generateToken(payload);

      if (!token) throw new InternalServerErrorException();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { usu_password, ...rest } = userData;

      return { user: rest, token };
    } catch (error) {
      handlerExceptions(error);
    }
  }

  async validateToken(token: string) {
    const isValid = await this.jwtService.verifyAsync<IPayload>(token);

    if (!isValid) throw new UnauthorizedException('Token is invalid');

    const user = await this.findOneUser(isValid.usu_email);

    if (!user) throw new InternalServerErrorException('User not found');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { usu_password, ...rest } = user;

    return rest;
  }

  //* Local Strategy (login)
  async validateUser(loginDto: LoginDto) {
    const { username, password } = loginDto;

    const user = await this.findOneUser(username);

    const match = await this.comparePassword(password, user.usu_password);

    if (!match) throw new UnauthorizedException('Invalid credentials');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { usu_password, ...rest } = user;

    // Return user to request
    return rest;
  }

  private async findOneUser(usuEmail: string) {
    const [newUser] = (await this.userRepository.sequelize.query(
      'SELECT * FROM sistemas.fn_get_usuario(?)',
      {
        replacements: [usuEmail],
        type: QueryTypes.SELECT,
      },
    )) as [{ data: IUserDB }];

    if (!newUser) throw new UnauthorizedException('Credenciales invalidas');

    return newUser.data;
  }

  private async generateToken(payload: IPayload): Promise<string> {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  private hashPassword(password: string): string {
    const hash: string = bcrypt.hashSync(password, 10);
    return hash;
  }

  private async comparePassword(
    usu_password: string,
    usu_pass_db: string,
  ): Promise<boolean> {
    const match = await bcrypt.compare(usu_password, usu_pass_db);
    return match;
  }
}
