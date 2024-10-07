import { USER_REPOSITORY } from '@/core/constants';
import { Provider } from '@nestjs/common';
import { User } from '../entities';

export const usersProviders: Provider[] = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
