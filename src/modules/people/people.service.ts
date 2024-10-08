import { EApiMethods, ERoutes } from '@/common/enums';
import {
  CreatePaginationDto,
  ResponsePaginationDto,
} from '@/common/pagination';
import { PaginationService } from '@/common/pagination/services/pagination.service';
import {
  DOCUMENT_ALREADY_EXISTS_MESSAGE,
  PERSON_REPOSITORY,
} from '@/core/constants';
import { handlerExceptions } from '@/core/database/handlers';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePersonDto, UpdatePersonDto } from './dto';
import { Person } from './entities';

@Injectable()
export class PeopleService {
  constructor(
    @Inject(PERSON_REPOSITORY) private readonly personRepository: typeof Person,
    private readonly paginationService: PaginationService,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const { document } = createPersonDto;

    const verifyDocument = await this.personRepository.findOne({
      where: { document },
    });

    if (verifyDocument)
      throw new BadRequestException(DOCUMENT_ALREADY_EXISTS_MESSAGE);

    try {
      return await this.personRepository.create({
        ...createPersonDto,
        date: new Date(createPersonDto.date),
      });
    } catch (error) {
      handlerExceptions(error);
    }
  }

  async findAllPaginate(
    createPaginationDto?: CreatePaginationDto,
  ): Promise<ResponsePaginationDto<Person>> {
    const { count, rows } = await this.personRepository.findAndCountAll({
      ...this.paginationService.generate(createPaginationDto),
    });

    if (rows.length === 0) throw new NotFoundException();

    return this.paginationService.paginate({
      apiMethod: EApiMethods.FIND_ALL,
      apiRoute: ERoutes.PEOPLE,
      data: rows,
      total: count,
      page: createPaginationDto.page,
      limit: createPaginationDto.limit,
    });
  }

  async findOne(id: number): Promise<Person> {
    const data = await this.personRepository.findByPk(id);
    if (!data) throw new NotFoundException();
    return data;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person> {
    const data = await this.findOne(id);
  
    const { surnames, names, telephone, gender, date, address } = updatePersonDto;
  
    try {
      return await data.update({
        surnames,
        names,
        telephone,
        gender,
        date: new Date(date),
        address,
      });
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
