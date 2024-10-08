import { EApiMethods, ERoutes } from '@/common/enums';
import {
  CreatePaginationDto,
  ResponsePaginationDto,
} from '@/common/pagination/dtos';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from '../auth/decorators';
import { ERoles } from '../auth/enums';
import { UsersService } from './users.service';

@Controller(ERoutes.USERS)
@ApiTags(ERoutes.USERS)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(EApiMethods.FIND_ALL_PAGINATE)
  @Auth(ERoles.ADMIN)
  @ApiOkResponse({ type: ResponsePaginationDto })
  findAllPaginate(@Query() createPaginationDto?: CreatePaginationDto) {
    return this.usersService.findAllPaginate(createPaginationDto);
  }
}
