import { Module } from '@nestjs/common';
import { PaginationModule } from './common/pagination';
import { DatabaseModule } from './core/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { BooksModule } from './modules/books/books.module';
import { PeopleModule } from './modules/people/people.module';
import { PublishersModule } from './modules/publishers/publishers.module';
import { AuthorsModule } from './modules/authors/authors.module';
import { RolesModule } from './modules/roles/roles.module';
import { SummariesModule } from './modules/summaries/summaries.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    PeopleModule,
    PaginationModule,
    RolesModule,
    SummariesModule,
    BooksModule,
    PublishersModule,
    AuthorsModule,
  ],
})
export class AppModule {}
