import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { AuthGuard } from '@nestjs/passport';
import { UserR } from '../dto';
import { PaginationDto } from '../../../core/dto/pagination.dto';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find-all')
  @ApiResponse({ type: UserR })
  findAll(@Query() paginationDto?: PaginationDto) {
    return this.userService.findAll(paginationDto);
  }
}
