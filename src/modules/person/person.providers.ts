import { PERSON_REPOSITORY } from '../../core/constants';
import { Person } from './person.entity';

export const personProviders = [
  {
    provide: PERSON_REPOSITORY,
    useValue: Person,
  },
];
