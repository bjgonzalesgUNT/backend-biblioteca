import { Module } from '@nestjs/common';
import { PaginationModule } from './common/pagination';
import { DatabaseModule } from './core/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { PeopleModule } from './modules/people/people.module';
import { RolesModule } from './modules/roles/roles.module';
import { UsersModule } from './modules/users/users.module';
import { SummariesModule } from './modules/summaries/summaries.module';
import { BooksModule } from './modules/books/books.module';

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
  ],
})
export class AppModule {}
