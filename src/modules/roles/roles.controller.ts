import { EApiMethods, ERoutes } from '@/common/enums';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';

@Controller(ERoutes.ROLES)
@ApiTags(ERoutes.ROLES)
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get(EApiMethods.FIND_ALL)
  // @Auth(ERoles.ADMIN)
  findAll() {
    return this.rolesService.findAll();
  }
}
