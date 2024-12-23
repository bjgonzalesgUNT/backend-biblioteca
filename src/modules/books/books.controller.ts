import { EApiMethods, ERoutes } from '@/common/enums';
import {
  CreatePaginationDto,
  ResponsePaginationDto,
} from '@/common/pagination';
import { ParseIdPipe } from '@/common/pipes/parse-id.pipe';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { QueryFindByFilterPublicDto } from './dto/queries';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities';

@Controller(ERoutes.BOOKS)
@ApiTags(ERoutes.BOOKS)
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post(EApiMethods.CREATE)
  @ApiCreatedResponse({ type: Book })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get(EApiMethods.FIND_ALL_PAGINATE)
  @ApiCreatedResponse({ type: ResponsePaginationDto<Book> })
  findAllPaginate(@Query() createPaginationDto: CreatePaginationDto) {
    return this.booksService.findAllPaginate(createPaginationDto);
  }

  @Get(EApiMethods.FIND_ONE)
  @ApiOkResponse({ type: Book })
  findOne(@Param('id', ParseIdPipe) id: number) {
    return this.booksService.findOne(id);
  }

  @Get('find-by-filter-paginate/:filter')
  @ApiOkResponse({ type: Book })
  findByFilterPaginate(
    @Param('filter') filter: string,
    @Query() createPaginationDto: CreatePaginationDto,
  ) {
    return this.booksService.findByFilterPaginate(filter, createPaginationDto);
  }

  @Get('find-by-filter-public-paginate')
  @ApiOkResponse({ type: Book })
  findByFilterPublicPaginate(@Query() query: QueryFindByFilterPublicDto) {
    return this.booksService.findByFilterPublicPaginate(query);
  }

  @Patch(EApiMethods.UPDATE)
  @ApiOkResponse({ type: Book })
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.update(id, updateBookDto);
  }

  @Patch(EApiMethods.CHANGE_STATUS)
  changeStatus(@Param('id', ParseIdPipe) id: number) {
    return this.booksService.changeStatus(id);
  }
}
