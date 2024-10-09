import { PaginationService } from '@/common/pagination/services/pagination.service';
import {
  DOCUMENT_ALREADY_EXISTS_MESSAGE,
  PERSON_REPOSITORY,
} from '@/core/constants';
import { handlerExceptions } from '@/core/database/handlers';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { QueryTypes } from 'sequelize';
import { UserDB } from '../users/dto';
import { CreatePersonDto, PersonDB, UpdatePersonDto } from './dto';
import { Person } from './entities';

@Injectable()
export class PeopleService {
  constructor(
    @Inject(PERSON_REPOSITORY) private readonly personRepository: typeof Person,
    private readonly paginationService: PaginationService,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<PersonDB> {
    const { document } = createPersonDto;

    const verifyDocument = await this.verifyDocument(document);

    if (verifyDocument)
      throw new BadRequestException(DOCUMENT_ALREADY_EXISTS_MESSAGE);

    try {
      await this.personRepository.create(createPersonDto);
      return await this.findOneByDocument(document);
    } catch (error) {
      handlerExceptions(error);
    }
  }

  async update(
    user: UserDB,
    updatePersonDto: UpdatePersonDto,
  ): Promise<PersonDB> {
    const { document } = user;

    const person = await this.personRepository.findOne({ where: { document } });

    await person.update(updatePersonDto);

    return await this.findOneByDocument(document);
  }

  private async findOneByDocument(document: string): Promise<PersonDB> {
    const [person] = (await this.personRepository.sequelize.query(
      'SELECT * FROM sistemas.fn_get_person_by_document(?)',
      {
        type: QueryTypes.SELECT,
        replacements: [document],
      },
    )) as [PersonDB];

    return person;
  }

  private async verifyDocument(document: string): Promise<boolean> {
    const person = await this.personRepository.findOne({ where: { document } });
    return person ? true : false;
  }
}
