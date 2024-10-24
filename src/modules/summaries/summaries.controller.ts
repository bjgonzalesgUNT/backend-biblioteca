import { EApiMethods, ERoutes } from '@/common/enums';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SummariesService } from './summaries.service';

@Controller(ERoutes.SUMMARIES)
@ApiTags(ERoutes.SUMMARIES)
export class SummariesController {
  constructor(private readonly summariesService: SummariesService) {}

  @Get(EApiMethods.FIND_ALL)
  async findAll() {
    return await this.summariesService.findAll();
  }
}
