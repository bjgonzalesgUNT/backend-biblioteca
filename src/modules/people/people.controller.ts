import { EApiMethods, ERoutes } from '@/common/enums';
import {
  CreatePaginationDto,
  ResponsePaginationDto,
} from '@/common/pagination';
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
import { ParseIdPipe } from '../../common/pipes/parse-id.pipe';
import { CreatePersonDto, UpdatePersonDto } from './dto';
import { Person } from './entities/person.entity';
import { PeopleService } from './people.service';

@Controller(ERoutes.PEOPLE)
@ApiTags(ERoutes.PEOPLE)
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post(EApiMethods.CREATE)
  @ApiCreatedResponse({ type: Person })
  @Auth(ERoles.ADMIN)
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Get(EApiMethods.FIND_ALL_PAGINATE)
  @Auth(ERoles.ADMIN)
  @ApiOkResponse({ type: ResponsePaginationDto })
  findAllPaginate(@Query() createPaginationDto?: CreatePaginationDto) {
    return this.peopleService.findAllPaginate(createPaginationDto);
  }

  @Patch(EApiMethods.UPDATE)
  @Auth(ERoles.ADMIN, ERoles.USER)
  @ApiOkResponse({ type: Person })
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return this.peopleService.update(id, updatePersonDto);
  }

  @Delete(EApiMethods.DELETE)
  @Auth(ERoles.ADMIN)
  @ApiOkResponse({ type: Boolean })
  remove(@Param('id', ParseIdPipe) id: number) {
    return this.peopleService.remove(id);
  }
}
