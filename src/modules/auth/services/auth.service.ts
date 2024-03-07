import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { USER_REPOSITORY } from '../../../core/constants';
import * as bcrypt from 'bcrypt';
import { User } from '../../../modules/user/user.entity';
import { LoginDto } from '../dto/login.dto';
import { Rol } from 'src/modules/rol/rol.entity';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { Employee } from 'src/modules/employee/employee.entity';
import { PayloadI } from '../interfaces/payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User) {
    const token = await this.generateToken(user);
    return { user, token };
  }

  async singUp(createUserDto: CreateUserDto) {
    const passHash = await this.hashPassword(createUserDto.usu_password);

    const newUser = await this.userRepository.create({
      ...createUserDto,
      usu_password: passHash,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { usu_password, ...rest } = newUser['dataValues'];

    const token = await this.generateToken({
      usu_id: newUser.usu_id,
      roles: newUser.roles,
    });

    return { user: rest, token: token };
  }

  async validateUser(loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.findOneUser(username);

    const match = await this.comparePassword(password, user.usu_password);

    if (!match) throw new UnauthorizedException('Credenciales invalidas');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { usu_password, ...rest } = user['dataValues'];

    return rest;
  }

  private async findOneUser(usu_email: string) {
    const user = await this.userRepository.findOne({
      where: { usu_email },
      include: [{ model: Rol }, Employee],
    });

    if (!user) throw new UnauthorizedException('Credenciales invalidas');

    return user;
  }

  private async generateToken(payload: PayloadI): Promise<string> {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  private async hashPassword(password: string): Promise<string> {
    const hash: string = await bcrypt.hash(password, 10);
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
