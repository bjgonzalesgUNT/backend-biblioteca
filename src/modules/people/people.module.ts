import { PaginationModule } from '@/common/pagination/pagination.module';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { peopleProviders } from './providers';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService, ...peopleProviders],
  imports: [PaginationModule, AuthModule],
})
export class PeopleModule {}
