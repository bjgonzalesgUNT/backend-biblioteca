import { EApiMethods, ERoutes } from '@/common/enums';
import { Auth, GetUser } from '@/modules/auth/decorators';
import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserDB } from '../users/dto';
import { CreatePersonDto, UpdatePersonDto } from './dto';
import { Person } from './entities/person.entity';
import { PeopleService } from './people.service';

@Controller(ERoutes.PEOPLE)
@ApiTags(ERoutes.PEOPLE)
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post(EApiMethods.CREATE)
  @ApiCreatedResponse({ type: Person })
  // @Auth(ERoles.ADMIN)
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Get('find-one-by-document')
  @ApiOkResponse({ type: Person })
  @Auth()
  findOne(@GetUser() user: UserDB) {
    return this.peopleService.findOne(user);
  }

  @Patch('update')
  @Auth()
  @ApiOkResponse({ type: Person })
  update(@GetUser() user: UserDB, @Body() updatePersonDto: UpdatePersonDto) {
    return this.peopleService.update(user, updatePersonDto);
  }
}
