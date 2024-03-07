import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from 'src/modules/user/user.entity';
import { PayloadI } from '../interfaces/payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWTKEY,
    });
  }

  async validate(paylaod: PayloadI) {
    const { usu_id } = paylaod;
    const user = await this.userRepository.findOne({
      where: { usu_id },
    });

    if (!user)
      throw new UnauthorizedException(
        'No estas autorizado para realizar operaciones',
      );
    return paylaod;
  }
}
