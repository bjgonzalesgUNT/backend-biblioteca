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
import { Auth } from 'src/modules/auth/decorators';
import { ERoles } from 'src/modules/auth/enums';
import { ApiMethods, ApiRoutes } from '../../../core/api';
import { PaginationDto, RPagination } from '../../../core/dto';
import { CreatePersonDto, UpdatePersonDto } from '../dto';
import { Person } from '../person.entity';
import { PersonService } from '../services/person.service';
import { ParseIdPipe } from './../../../core/pipes/parse-id.pipe';

@Controller(ApiRoutes.PERSON)
@ApiTags(ApiRoutes.PERSON)
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post(ApiMethods.CREATE)
  @ApiCreatedResponse({ type: Person })
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get(ApiMethods.FIND_ALL)
  @Auth(ERoles.USER)
  @ApiOkResponse({ type: RPagination })
  findAll(@Query() paginationDto?: PaginationDto) {
    return this.personService.findAll(paginationDto);
  }

  @Get(`${ApiMethods.FIND_ONE}/:id`)
  @Auth(ERoles.ADMIN)
  @ApiOkResponse({ type: Person })
  findOne(@Param('id', ParseIdPipe) id: number) {
    return this.personService.findOne(id);
  }

  @Patch(`${ApiMethods.UPDATE}/:id`)
  @Auth(ERoles.ADMIN, ERoles.USER)
  @ApiOkResponse({ type: Person })
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return this.personService.update(id, updatePersonDto);
  }

  @Delete(`${ApiMethods.DELETE}/:id`)
  @Auth(ERoles.ADMIN)
  @ApiOkResponse({ type: Boolean })
  remove(@Param('id', ParseIdPipe) id: number) {
    return this.personService.remove(id);
  }
}
