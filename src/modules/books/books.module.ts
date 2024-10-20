import { PaginationModule } from '@/common/pagination';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { booksProviders } from './providers';

@Module({
  controllers: [BooksController],
  providers: [BooksService, ...booksProviders],
  imports: [AuthModule, PaginationModule],
})
export class BooksModule {}
