import {
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { databaseError } from 'src/core/database/error/database-error';
import { Role } from 'src/modules/role/role.entity';
import { UserRole } from 'src/modules/user-role/user-role.entity';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import {
  ROLE_REPOSITORY,
  USER_REPOSITORY,
  USER_ROLE_REPOSITORY,
} from '../../../core/constants';
import { User } from '../../../modules/user/user.entity';
import { LoginDto } from '../dto/login.dto';
import { IPayload } from '../interfaces/payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
    @Inject(USER_ROLE_REPOSITORY)
    private readonly userRoleRepository: typeof UserRole,
    @Inject(ROLE_REPOSITORY) private readonly roleRepository: typeof Role,
  ) {}

  async login(user: User) {
    const token = await this.generateToken(user);
    return { user, token };
  }

  async singUp(createUserDto: CreateUserDto) {
    const t = await this.userRepository.sequelize.transaction();
    try {
      const { email, password } = createUserDto;

      const passHash = await this.hashPassword(password);

      const newUser = await this.userRepository.create(
        {
          usu_email: email,
          usu_password: passHash,
        },
        { transaction: t },
      );

      //* Save default role to new user (user)
      const defaultRole = await this.roleRepository.findOne({
        where: { rol_nombre: 'user' },
      });

      //* Save user role
      await this.userRoleRepository.create(
        {
          usr_usu_id: newUser.usu_id,
          usr_rol_id: defaultRole.rol_id,
        },
        { transaction: t },
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { usu_password, ...rest } = newUser['dataValues'];

      //* Generate token
      const token = await this.generateToken({
        usu_email: newUser.usu_email,
        roles: newUser.roles,
      });

      await t.commit();

      return { user: { ...rest, role: defaultRole }, token: token };
    } catch (error) {
      await t.rollback();
      databaseError(error);
    }
  }

  async validateToken(token: string) {
    console.log(token);

    const isValid = await this.jwtService.verifyAsync<IPayload>(token);

    if (!isValid) throw new UnauthorizedException('Token invalido');

    const user = await this.findOneUser(isValid.usu_email);

    if (!user) throw new InternalServerErrorException('Usuario no encontrado');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { usu_password, ...rest } = user;

    return rest;
  }

  //* Local Strategy (login)
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
      include: [Role],
    });

    if (!user) throw new UnauthorizedException('Credenciales invalidas');

    return user;
  }

  private async generateToken(payload: IPayload): Promise<string> {
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
