import { EApiMethods, ERoutes } from '@/common/enums';
import {
  CreatePaginationDto,
  PaginationService,
  ResponsePaginationDto,
} from '@/common/pagination';
import {
  AUTHOR_ALIAS_ALREADY_EXISTS_MESSAGE,
  AUTHOR_NOT_FOUND_MESSAGE,
  AUTHOR_REPOSITORY,
} from '@/core/constants';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject(AUTHOR_REPOSITORY) private readonly authorRepository: typeof Author,
    private readonly paginationService: PaginationService,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const { alias } = createAuthorDto;

    await this.verifyAlias(alias);

    return await this.authorRepository.create(createAuthorDto);
  }

  async findAll(): Promise<Author[]> {
    return this.authorRepository.findAll();
  }

  async findAllPaginate(
    createPaginationDto: CreatePaginationDto,
  ): Promise<ResponsePaginationDto<Author>> {
    const { limit, offset } =
      this.paginationService.generate(createPaginationDto);

    const { count, rows } = await this.authorRepository.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    return this.paginationService.paginate({
      apiMethod: EApiMethods.FIND_ALL_PAGINATE,
      apiRoute: ERoutes.AUTHORS,
      data: rows,
      limit,
      page: createPaginationDto.page,
      total: count,
    });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const author = await this.findByPk(id);

    return await author.update(updateAuthorDto);
  }

  async changeStatus(id: number): Promise<void> {
    const book = await this.authorRepository.findOne({
      where: { id },
      paranoid: false,
    });

    if (book.deletedAt) await book.restore();
    else await book.destroy();
  }

  private readonly findByPk = async (id: number): Promise<Author> => {
    const author = await this.authorRepository.findByPk(id);

    if (!author) throw new BadRequestException(AUTHOR_NOT_FOUND_MESSAGE);

    return author;
  };

  private async verifyAlias(alias: string): Promise<Author> {
    const author = await this.authorRepository.findOne({ where: { alias } });

    if (author)
      throw new BadRequestException(AUTHOR_ALIAS_ALREADY_EXISTS_MESSAGE);

    return author;
  }
}
