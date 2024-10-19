import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { summariesProviders } from './providers/summaries.providers';
import { SummariesController } from './summaries.controller';
import { SummariesService } from './summaries.service';

@Module({
  controllers: [SummariesController],
  providers: [SummariesService, ...summariesProviders],
  imports: [AuthModule],
})
export class SummariesModule {}
