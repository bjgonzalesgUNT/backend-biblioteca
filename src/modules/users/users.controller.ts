import { ERoutes } from '@/core/api';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RPagination } from 'src/core/dto/pagination/pagination-response.dto';
import { PaginationDto } from '../../core/dto/pagination/pagination.dto';
import { Auth } from '../auth/decorators';
import { ERoles } from '../auth/enums';
import { UsersService } from './users.service';

@Controller(ERoutes.USERS)
@ApiTags(ERoutes.USERS)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('find-all')
  @Auth(ERoles.ADMIN)
  @ApiResponse({ type: RPagination })
  findAll(@Query() paginationDto?: PaginationDto) {
    return this.usersService.findAll(paginationDto);
  }
}
