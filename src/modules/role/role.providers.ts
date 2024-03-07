import { ROLE_REPOSITORY } from 'src/core/constants';
import { Role } from './role.entity';

export const roleProviders = [
  {
    provide: ROLE_REPOSITORY,
    useValue: Role,
  },
];
