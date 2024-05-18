import { Module } from '@nestjs/common';
import { PaginationModule } from '../../core/pagination/pagination.module';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { userProviders } from './user.providers';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  imports: [PaginationModule, AuthModule],
})
export class UserModule {}
