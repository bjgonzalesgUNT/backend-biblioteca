import { envs } from '@/core/config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { usersProviders } from '../users/providers';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, ...usersProviders],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: envs.jwtKey,
      signOptions: {
        expiresIn: envs.jwtExpiration,
      },
    }),
  ],
  exports: [AuthModule, JwtModule],
})
export class AuthModule {}
