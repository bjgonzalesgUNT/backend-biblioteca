import { Inject, Injectable } from '@nestjs/common';
import { SUMMARY_1_REPOSITORY } from './../../core/constants/keys.constants';
import { Summary1, Summary2, Summary3 } from './entities';

@Injectable()
export class SummariesService {
  constructor(
    @Inject(SUMMARY_1_REPOSITORY)
    private readonly summary1Repository: typeof Summary1,
  ) {}

  async findAll(): Promise<Summary1[]> {
    return await this.summary1Repository.findAll({
      include: { model: Summary2, include: [Summary3] },
    });
  }
}
