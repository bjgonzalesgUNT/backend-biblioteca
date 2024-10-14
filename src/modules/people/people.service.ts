import {
  DOCUMENT_ALREADY_EXISTS_MESSAGE,
  PERSON_REPOSITORY,
} from '@/core/constants';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserDB } from '../users/dto';
import { CreatePersonDto, UpdatePersonDto } from './dto';
import { Person } from './entities';
import { QueryTypes } from 'sequelize';

@Injectable()
export class PeopleService {
  constructor(
    @Inject(PERSON_REPOSITORY) private readonly personRepository: typeof Person,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const { document } = createPersonDto;

    const verifyDocument = await this.verifyDocument(document);

    if (verifyDocument)
      throw new BadRequestException(DOCUMENT_ALREADY_EXISTS_MESSAGE);

    return await this.personRepository.create(createPersonDto);
  }

  async findOne(user: UserDB): Promise<Person> {
    const { document } = user;

    const [person] = (await this.personRepository.sequelize.query(
      'SELECT * FROM sistemas.fn_get_person_by_document(?)',
      { type: QueryTypes.SELECT, replacements: [document] },
    )) as [Person];

    return person;
  }

  async update(
    user: UserDB,
    updatePersonDto: UpdatePersonDto,
  ): Promise<Person> {
    const { document } = user;

    const person = await this.personRepository.findOne({ where: { document } });

    return await person.update(updatePersonDto);
  }

  private async verifyDocument(document: string): Promise<boolean> {
    const person = await this.personRepository.findOne({ where: { document } });
    return person ? true : false;
  }
}
