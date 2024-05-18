import { Module } from '@nestjs/common';
import { PaginationModule } from './../../core/pagination/pagination.module';
import { PersonController } from './controllers/person.controller';
import { personProviders } from './person.providers';
import { PersonService } from './services/person.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [PersonController],
  providers: [PersonService, ...personProviders],
  imports: [PaginationModule, AuthModule],
})
export class PersonModule {}
