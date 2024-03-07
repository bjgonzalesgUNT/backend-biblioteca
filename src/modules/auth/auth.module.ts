import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { userProviders } from '../user/user.providers';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { userRoleProviders } from '../user-role/user-role.providers';
import { roleProviders } from '../role/role.providers';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    ...userProviders,
    ...userRoleProviders,
    ...roleProviders,
  ],
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get<string>('JWTKEY'),
          signOptions: {
            expiresIn: config.get<string>('TOKEN_EXPIRATION'),
          },
        };
      },
    }),
  ],
  exports: [AuthModule, JwtModule, AuthService],
})
export class AuthModule {}
