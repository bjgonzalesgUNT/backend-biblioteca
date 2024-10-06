import { PERSON_REPOSITORY } from '@/core/constants';
import { Provider } from '@nestjs/common';
import { Person } from '../entities';

export const peopleProviders: Provider[] = [
  {
    provide: PERSON_REPOSITORY,
    useValue: Person,
  },
];
