import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { QueryTypes } from 'sequelize';
import { JWT_KEY, USER_REPOSITORY } from 'src/core/constants';
import { User } from '../../../modules/user/user.entity';
import { IPayload, IUserDB } from '../interfaces';

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

  async validate(payload: IPayload) {
    const { usu_email } = payload;

    const [userDatabase] = (await this.userRepository.sequelize.query(
      'SELECT * FROM sistemas.fn_get_usuario(?)',
      { replacements: [usu_email], type: QueryTypes.SELECT },
    )) as [{ data: IUserDB }];

    if (!userDatabase)
      throw new UnauthorizedException('User is not authorized');

    return userDatabase.data;
  }
}
