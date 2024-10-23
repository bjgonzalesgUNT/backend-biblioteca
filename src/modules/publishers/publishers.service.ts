import { EApiMethods, ERoutes } from '@/common/enums';
import {
  CreatePaginationDto,
  PaginationService,
  ResponsePaginationDto,
} from '@/common/pagination';
import {
  PUBLISHER_ALREADY_EXISTS_MESSAGE,
  PUBLISHER_NOT_FOUND_MESSAGE,
  PUBLISHER_REPOSITORY,
} from '@/core/constants';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher } from './entities';

@Injectable()
export class PublishersService {
  constructor(
    @Inject(PUBLISHER_REPOSITORY)
    private readonly publisherRepository: typeof Publisher,
    private readonly paginationService: PaginationService,
  ) {}

  async create(createPublisherDto: CreatePublisherDto): Promise<Publisher> {
    const { name } = createPublisherDto;

    await this.verifyName(name);

    return this.publisherRepository.create(createPublisherDto);
  }

  async findAll(): Promise<Publisher[]> {
    return this.publisherRepository.findAll();
  }

  async findAllPaginate(
    createPaginationDto: CreatePaginationDto,
  ): Promise<ResponsePaginationDto<Publisher>> {
    const { limit, offset } =
      this.paginationService.generate(createPaginationDto);

    const { rows, count } = await this.publisherRepository.findAndCountAll({
      limit,
      offset,
      paranoid: false,
    });

    return this.paginationService.paginate({
      apiMethod: EApiMethods.FIND_ALL_PAGINATE,
      apiRoute: ERoutes.PUBLISHERS,
      data: rows,
      limit,
      page: createPaginationDto.page,
      total: count,
    });
  }

  async update(
    id: number,
    updatePublisherDto: UpdatePublisherDto,
  ): Promise<Publisher> {
    const { name } = updatePublisherDto;

    const publisher = await this.findByPk(id);

    await this.verifyName(name);

    return publisher.update(updatePublisherDto);
  }

  async changeStatus(id: number): Promise<void> {
    const publisher = await this.findByPk(id, false);

    if (publisher.deletedAt) await publisher.restore();
    else await publisher.destroy();
  }

  private async findByPk(id: number, paranoid?: boolean): Promise<Publisher> {
    const publisher = await this.publisherRepository.findByPk(id, { paranoid });

    if (!publisher) throw new NotFoundException(PUBLISHER_NOT_FOUND_MESSAGE);

    return publisher;
  }

  private async verifyName(name: string): Promise<void> {
    const publisher = await this.publisherRepository.findOne({
      where: { name },
    });

    if (publisher)
      throw new BadRequestException(PUBLISHER_ALREADY_EXISTS_MESSAGE);
  }
}
