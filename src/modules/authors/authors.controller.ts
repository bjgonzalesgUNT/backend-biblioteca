import { EApiMethods, ERoutes } from '@/common/enums';
import {
  CreatePaginationDto,
  ResponsePaginationDto,
} from '@/common/pagination';
import { ParseIdPipe } from '@/common/pipes/parse-id.pipe';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Controller(ERoutes.AUTHORS)
@ApiTags(ERoutes.AUTHORS)
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post(EApiMethods.CREATE)
  @ApiCreatedResponse({ type: Author })
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get(EApiMethods.FIND_ALL)
  @ApiOkResponse({ type: [Author] })
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(EApiMethods.FIND_ALL_PAGINATE)
  @ApiOkResponse({ type: ResponsePaginationDto<Author> })
  findAllPaginate(@Query() createPaginationDto: CreatePaginationDto) {
    return this.authorsService.findAllPaginate(createPaginationDto);
  }

  @Patch(EApiMethods.UPDATE)
  @ApiOkResponse({ type: Author })
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorsService.update(id, updateAuthorDto);
  }

  @Patch(EApiMethods.CHANGE_STATUS)
  changeStatus(@Param('id', ParseIdPipe) id: number) {
    return this.authorsService.changeStatus(id);
  }
}
