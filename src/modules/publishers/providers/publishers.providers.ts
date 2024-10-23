import { PUBLISHER_REPOSITORY } from '@/core/constants';
import { Provider } from '@nestjs/common';
import { Publisher } from '../entities/publisher.entity';

export const publishersProviders: Provider[] = [
  {
    provide: PUBLISHER_REPOSITORY,
    useValue: Publisher,
  },
];
