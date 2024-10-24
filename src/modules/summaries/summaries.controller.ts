import { ERoutes } from '@/common/enums';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SummariesService } from './summaries.service';
import { Summary1, Summary2, Summary3 } from './entities';

@Controller(ERoutes.SUMMARIES)
@ApiTags(ERoutes.SUMMARIES)
export class SummariesController {
  constructor(private readonly summariesService: SummariesService) {}

  @Get('find-all-s1')
  @ApiOkResponse({ type: [Summary1] })
  async findAllS1() {
    return await this.summariesService.findAllS1();
  }

  @Get('find-all-s2')
  @ApiOkResponse({ type: [Summary2] })
  async findAllS2() {
    return await this.summariesService.findAllS2();
  }

  @Get('find-all-s3')
  @ApiOkResponse({ type: [Summary3] })
  async findAllS3() {
    return await this.summariesService.findAllS3();
  }
}
