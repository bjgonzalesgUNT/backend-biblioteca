import { ROLE_REPOSITORY } from '@/core/constants';
import { Provider } from '@nestjs/common';
import { Role } from '../entities';

export const rolesProviders: Provider[] = [
  {
    provide: ROLE_REPOSITORY,
    useValue: Role,
  },
];
