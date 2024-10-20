import { EApiMethods, ERoutes } from '@/common/enums';
import { CreatePaginationDto } from '@/common/pagination';
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
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller(ERoutes.BOOKS)
@ApiTags(ERoutes.BOOKS)
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post(EApiMethods.CREATE)
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get(EApiMethods.FIND_ALL_PAGINATE)
  findAllPaginate(@Query() createPaginationDto: CreatePaginationDto) {
    return this.booksService.findAllPaginate(createPaginationDto);
  }

  @Get(EApiMethods.FIND_ONE)
  findOne(@Param('id', ParseIdPipe) id: number) {
    return this.booksService.findOne(id);
  }

  @Patch(EApiMethods.UPDATE)
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(EApiMethods.CHANGE_STATUS)
  changeStatus(@Param('id', ParseIdPipe) id: number) {
    return this.booksService.changeStatus(id);
  }
}
