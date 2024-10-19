import {
  SUMMARY_1_REPOSITORY,
  SUMMARY_2_REPOSITORY,
  SUMMARY_3_REPOSITORY,
} from '@/core/constants';
import { Provider } from '@nestjs/common';
import { Summary1, Summary2, Summary3 } from '../entities';

export const summariesProviders: Provider[] = [
  {
    provide: SUMMARY_1_REPOSITORY,
    useValue: Summary1,
  },
  {
    provide: SUMMARY_2_REPOSITORY,
    useValue: Summary2,
  },
  {
    provide: SUMMARY_3_REPOSITORY,
    useValue: Summary3,
  },
];
