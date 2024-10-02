import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ApiMethods, ApiRoutes } from 'src/core/api';
import { CreatePersonDto, UpdatePersonDto } from '../dto';
import { Person } from '../person.entity';
import { PERSON_REPOSITORY } from './../../../core/constants';
import { handlerExceptions } from './../../../core/database/handlers';
import { PaginationDto, RPagination } from './../../../core/dto';
import { PaginationService } from './../../../core/pagination/services/pagination.service';

@Injectable()
export class PersonService {
  constructor(
    @Inject(PERSON_REPOSITORY) private readonly personRepository: typeof Person,
    private readonly paginationService: PaginationService,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    try {
      return await this.personRepository.create(createPersonDto);
    } catch (error) {
      handlerExceptions(error);
    }
  }

  async findAll(paginationDto?: PaginationDto): Promise<RPagination<Person>> {
    const { count, rows } = await this.personRepository.findAndCountAll({
      ...this.paginationService.generate(paginationDto),
    });

    if (rows.length === 0) throw new NotFoundException();

    return this.paginationService.create({
      apiMethod: ApiMethods.FIND_ALL,
      apiRoute: ApiRoutes.PERSON,
      data: rows,
      total: count,
      page: paginationDto.page,
      limit: paginationDto.limit,
    });
  }

  async findOne(id: number): Promise<Person> {
    const data = await this.personRepository.findByPk(id);
    if (!data) throw new NotFoundException();
    return data;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person> {
    const data = await this.findOne(id);
    try {
      return await data.update(updatePersonDto);
    } catch (error) {
      handlerExceptions(error);
    }
  }

  async remove(id: number): Promise<boolean> {
    const data = await this.findOne(id);
    try {
      await data.destroy();
      return true;
    } catch (error) {
      handlerExceptions(error);
    }
  }
}
