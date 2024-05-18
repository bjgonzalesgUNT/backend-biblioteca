import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationResponse } from 'src/core/dto/pagination/pagination-response.dto';
import { PaginationDto } from '../../../core/dto/pagination/pagination.dto';
import { Auth } from '../../../modules/auth/decorators';
import { ERoles } from '../../../modules/auth/enums';
import { UserService } from '../services/user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find-all')
  @Auth(ERoles.ADMIN)
  @ApiResponse({ type: PaginationResponse })
  findAll(@Query() paginationDto?: PaginationDto) {
    return this.userService.findAll(paginationDto);
  }
}
