import { Provider } from '@nestjs/common';
import { PERSON_REPOSITORY } from './../../core/constants/index';
import { Person } from './person.entity';

export const personProviders: Provider[] = [
  {
    provide: PERSON_REPOSITORY,
    useValue: Person,
  },
];
