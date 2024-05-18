import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ERoles } from '../enums';
import { RolesGuard } from '../guards';
import { Roles } from './roles.decorator';

export const Auth = (...roles: ERoles[]) =>
  applyDecorators(
    ApiBearerAuth(),
    Roles(...roles),
    UseGuards(AuthGuard('jwt'), RolesGuard),
  );
