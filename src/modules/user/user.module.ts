import { Module } from '@nestjs/common';
import { userProviders } from './user.providers';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
