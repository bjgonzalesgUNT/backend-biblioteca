import { Provider } from '@nestjs/common';
import { USER_REPOSITORY } from '../../core/constants';
import { User } from './user.entity';

export const userProviders: Provider[] = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
