import {
  SUMMARY_1_REPOSITORY,
  SUMMARY_2_REPOSITORY,
  SUMMARY_3_REPOSITORY,
} from '@/core/constants/keys.constants';
import { Inject, Injectable } from '@nestjs/common';
import { Summary1, Summary2, Summary3 } from './entities';
import { Op } from 'sequelize';

@Injectable()
export class SummariesService {
  constructor(
    @Inject(SUMMARY_1_REPOSITORY)
    private readonly summary1Repository: typeof Summary1,
    @Inject(SUMMARY_2_REPOSITORY)
    private readonly summary2Repository: typeof Summary2,
    @Inject(SUMMARY_3_REPOSITORY)
    private readonly summary3Repository: typeof Summary3,
  ) {}

  async findAllS1(): Promise<Summary1[]> {
    return await this.summary1Repository.findAll();
  }

  async findAllS2(): Promise<Summary2[]> {
    return await this.summary2Repository.findAll();
  }

  async findAllS3(): Promise<Summary3[]> {
    return await this.summary3Repository.findAll({
      where: {
        description: { [Op.not]: '-', [Op.like]: '%NOVELA%' },
      },
    });
  }
}
