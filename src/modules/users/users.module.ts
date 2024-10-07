import { PaginationModule } from '@/common/pagination/pagination.module';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { usersProviders } from './providers';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
  imports: [PaginationModule, AuthModule],
})
export class UsersModule {}
