import { Controller, Get } from '@nestjs/common';
import { RolesService } from './roles.service';
import { EApiMethods, ERoutes } from '@/common/enums';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../auth/decorators';
import { ERoles } from '../auth/enums';

@Controller(ERoutes.ROLES)
@ApiTags(ERoutes.ROLES)
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get(EApiMethods.FIND_ALL)
  @Auth(ERoles.ADMIN)
  findAll() {
    return this.rolesService.findAll();
  }
}
