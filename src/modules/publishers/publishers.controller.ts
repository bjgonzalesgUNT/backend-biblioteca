import { EApiMethods, ERoutes } from '@/common/enums';
import {
  CreatePaginationDto,
  ResponsePaginationDto,
} from '@/common/pagination';
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
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher } from './entities';
import { PublishersService } from './publishers.service';

@Controller(ERoutes.PUBLISHERS)
@ApiTags(ERoutes.PUBLISHERS)
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}

  @Post(EApiMethods.CREATE)
  @ApiCreatedResponse({ type: Publisher })
  create(@Body() createPublisherDto: CreatePublisherDto) {
    return this.publishersService.create(createPublisherDto);
  }

  @Get(EApiMethods.FIND_ALL)
  @ApiOkResponse({ type: [Publisher] })
  findAll() {
    return this.publishersService.findAll();
  }

  @Get(EApiMethods.FIND_ALL_PAGINATE)
  @ApiOkResponse({ type: ResponsePaginationDto<Publisher> })
  findAllPaginate(@Query() createPaginationDto?: CreatePaginationDto) {
    return this.publishersService.findAllPaginate(createPaginationDto);
  }

  @Get('find-by-name-paginate/:name')
  @ApiOkResponse({ type: ResponsePaginationDto<Publisher> })
  findByNamePaginate(
    @Param('name') name: string,
    @Query() createPaginationDto?: CreatePaginationDto,
  ) {
    return this.publishersService.findByNamePaginate(name, createPaginationDto);
  }

  @Patch(EApiMethods.UPDATE)
  update(
    @Param('id') id: string,
    @Body() updatePublisherDto: UpdatePublisherDto,
  ) {
    return this.publishersService.update(+id, updatePublisherDto);
  }

  @Patch(EApiMethods.CHANGE_STATUS)
  changeStatus(@Param('id') id: string) {
    return this.publishersService.changeStatus(+id);
  }
}
