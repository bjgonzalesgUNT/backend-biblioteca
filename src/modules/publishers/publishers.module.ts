import { Module } from '@nestjs/common';
import { PublishersController } from './publishers.controller';
import { PublishersService } from './publishers.service';
import { publishersProviders } from './providers';
import { AuthModule } from '../auth/auth.module';
import { PaginationModule } from '@/common/pagination';

@Module({
  controllers: [PublishersController],
  providers: [PublishersService, ...publishersProviders],
  imports: [AuthModule, PaginationModule],
})
export class PublishersModule {}
