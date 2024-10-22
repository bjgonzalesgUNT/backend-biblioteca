import { PaginationModule } from '@/common/pagination';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { authorsProviders } from './providers/authors.providers';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService, ...authorsProviders],
  imports: [AuthModule, PaginationModule],
})
export class AuthorsModule {}
