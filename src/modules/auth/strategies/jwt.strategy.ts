import {
  JWT_KEY,
  ROLE_NOT_AUTHORIZED_MESSAGE,
  USER_NOT_AUTHORIZED_MESSAGE,
  USER_REPOSITORY,
} from '@/core/constants';
import { UserDB } from '@/modules/users/dto';
import { User } from '@/modules/users/entities';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { QueryTypes } from 'sequelize';
import { IPayload } from '../interfaces';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get(JWT_KEY),
    });
  }

  async validate(payload: IPayload): Promise<UserDB> {
    const { username } = payload;

    const [user] = (await this.userRepository.sequelize.query(
      'SELECT * FROM sistemas.fn_get_user_by_username(?);',
      {
        type: QueryTypes.SELECT,
        replacements: [username],
      },
    )) as [UserDB];

    if (!user) throw new UnauthorizedException(ROLE_NOT_AUTHORIZED_MESSAGE);

    if (!user.status)
      throw new UnauthorizedException(USER_NOT_AUTHORIZED_MESSAGE);

    return user;
  }
}
