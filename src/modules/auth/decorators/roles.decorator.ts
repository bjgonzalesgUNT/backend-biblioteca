import { SetMetadata } from '@nestjs/common';
import { ROLES_KEY } from './../../../core/constants/index';
import { ERoles } from '../enums';

export const Roles = (...roles: ERoles[]) => SetMetadata(ROLES_KEY, roles);
