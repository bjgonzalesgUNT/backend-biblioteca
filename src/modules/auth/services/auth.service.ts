import { CREDENTIALS_INVALID_MESSAGE, USER_REPOSITORY } from '@/core/constants';
import { CreateUserDto, UserDB } from '@/modules/users/dto';
import { User } from '@/modules/users/entities';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { QueryTypes } from 'sequelize';
import { ChangePasswordDto } from '../dto';
import { LoginDto } from '../dto/login.dto';
import { IPayload } from '../interfaces/payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: UserDB) {
    const token = this.generateToken({
      id: user.id,
      username: user.username,
      role: user.role,
    });

    return { user, token };
  }

  async singUp(createUserDto: CreateUserDto): Promise<UserDB> {
    const { username, password, person_id, role_id } = createUserDto;

    const verifyUser = await this.findOneUser(username);

    if (verifyUser) throw new UnauthorizedException('El usuario ya existe');

    await this.userRepository.create({
      username,
      password: this.hashPassword(password),
      person_id,
      role_id,
    });

    const userDB = await this.findOneUserByUsername(username);

    return userDB;
  }

  async changePassword(
    user: UserDB,
    changePasswordDto: ChangePasswordDto,
  ): Promise<void> {
    const { current_password, new_password } = changePasswordDto;

    const usr = await this.findOneUser(user.username);

    const match = await this.comparePassword(current_password, usr.password);

    if (!match) throw new UnauthorizedException(CREDENTIALS_INVALID_MESSAGE);

    await usr.update({ password: this.hashPassword(new_password) });
  }

  //* Local Strategy (login)
  async validateUser(loginDto: LoginDto): Promise<UserDB> {
    const { username } = loginDto;

    const user = await this.findOneUser(username);

    if (!user) throw new UnauthorizedException(CREDENTIALS_INVALID_MESSAGE);

    const match = await this.comparePassword(loginDto.password, user.password);

    if (!match) throw new UnauthorizedException(CREDENTIALS_INVALID_MESSAGE);

    return await this.findOneUserByUsername(username);
  }

  private async findOneUser(username: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { username },
    });

    return user;
  }

  private async findOneUserByUsername(username: string): Promise<UserDB> {
    const [user] = (await this.userRepository.sequelize.query(
      'SELECT * FROM sistemas.fn_get_user_by_username(?)',
      {
        type: QueryTypes.SELECT,
        replacements: [username],
      },
    )) as [UserDB];

    return user;
  }

  private generateToken(payload: IPayload): string {
    const token = this.jwtService.sign(payload);
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
