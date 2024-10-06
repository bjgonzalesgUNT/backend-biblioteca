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
import { ApiMethods, ERoutes } from '../../core/api';
import { PaginationDto, RPagination } from '../../core/dto';
import { ParseIdPipe } from '../../core/pipes/parse-id.pipe';
import { CreatePersonDto, UpdatePersonDto } from './dto';
import { Person } from './entities/person.entity';
import { PeopleService } from './people.service';

@Controller(ERoutes.PEOPLE)
@ApiTags(ERoutes.PEOPLE)
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post(ApiMethods.CREATE)
  @ApiCreatedResponse({ type: Person })
  @Auth(ERoles.ADMIN)
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Get(ApiMethods.FIND_ALL)
  @Auth(ERoles.ADMIN)
  @ApiOkResponse({ type: RPagination })
  findAll(@Query() paginationDto?: PaginationDto) {
    return this.peopleService.findAll(paginationDto);
  }

  @Patch(ApiMethods.UPDATE)
  @Auth(ERoles.ADMIN, ERoles.USER)
  @ApiOkResponse({ type: Person })
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return this.peopleService.update(id, updatePersonDto);
  }

  @Delete(ApiMethods.DELETE)
  @Auth(ERoles.ADMIN)
  @ApiOkResponse({ type: Boolean })
  remove(@Param('id', ParseIdPipe) id: number) {
    return this.peopleService.remove(id);
  }
}
