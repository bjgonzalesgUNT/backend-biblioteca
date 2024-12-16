import { EApiMethods, ERoutes } from '@/common/enums';
import {
  CreatePaginationDto,
  PaginationService,
  ResponsePaginationDto,
} from '@/common/pagination';
import {
  BOOK_ALREADY_EXISTS_MESSAGE,
  BOOK_NOT_FOUND_MESSAGE,
  BOOK_REPOSITORY,
} from '@/core/constants';
import { handlerExceptions } from '@/core/database/handlers';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Op, WhereOptions } from 'sequelize';
import { Author } from '../authors/entities/author.entity';
import { Publisher } from '../publishers/entities';
import { Summary1, Summary2, Summary3 } from '../summaries/entities';
import { CreateBookDto } from './dto/create-book.dto';
import { QueryFindByFilterPublicDto } from './dto/queries';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities';

@Injectable()
export class BooksService {
  constructor(
    private readonly paginationService: PaginationService,
    @Inject(BOOK_REPOSITORY) private readonly bookRepository: typeof Book,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const { title, author_id, edition } = createBookDto;

    await this.validateDuplicate(title, author_id, edition);

    const newBook = await this.bookRepository.create(createBookDto);

    return this.findByPk(newBook.id);
  }

  async findAllPaginate(
    createPaginationDto: CreatePaginationDto,
  ): Promise<ResponsePaginationDto<Book>> {
    const { limit, offset } =
      this.paginationService.generate(createPaginationDto);

    const { count, rows } = await this.bookRepository.findAndCountAll({
      include: [
        {
          model: Summary3,
          paranoid: false,
          include: [
            {
              model: Summary2,
              paranoid: false,
              include: [{ model: Summary1, paranoid: false }],
            },
          ],
        },
        { model: Author, paranoid: false },
        Publisher,
      ],
      limit,
      offset,
      paranoid: false,
      order: [['createdAt', 'DESC']],
    });

    return this.paginationService.paginate({
      apiMethod: EApiMethods.FIND_ALL_PAGINATE,
      apiRoute: ERoutes.BOOKS,
      data: rows,
      limit,
      page: createPaginationDto.page,
      total: count,
    });
  }

  async findByFilterPaginate(
    filter: string,
    createPaginationDto: CreatePaginationDto,
  ): Promise<ResponsePaginationDto<Book>> {
    const { limit, offset } =
      this.paginationService.generate(createPaginationDto);

    const { count, rows } = await this.bookRepository.findAndCountAll({
      where: {
        [Op.or]: {
          title: { [Op.iLike]: `%${filter}%` },
          '$author.alias$': { [Op.iLike]: `%${filter}%` },
          '$author.surnames$': { [Op.iLike]: `%${filter}%` },
          '$author.names$': { [Op.iLike]: `%${filter}%` },
          '$deway.description$': { [Op.iLike]: `%${filter}%` },
          '$publisher.name$': { [Op.iLike]: `%${filter}%` },
        },
      },
      include: [
        {
          model: Summary3,
          paranoid: false,
          include: [
            {
              model: Summary2,
              paranoid: false,
              include: [{ model: Summary1, paranoid: false }],
            },
          ],
        },
        { model: Author, paranoid: false },
        Publisher,
      ],
      limit,
      offset,
      paranoid: false,
      order: [['createdAt', 'DESC']],
    });

    return this.paginationService.paginate({
      apiMethod: EApiMethods.FIND_ALL_PAGINATE,
      apiRoute: ERoutes.BOOKS,
      data: rows,
      limit,
      page: createPaginationDto.page,
      total: count,
    });
  }

  async findByFilterPublicPaginate(
    query: QueryFindByFilterPublicDto,
  ): Promise<ResponsePaginationDto<Book>> {
    const { filter, ...rest } = query;

    const { limit, offset } = this.paginationService.generate(rest);

    const whereOptions: WhereOptions = filter
      ? {
          [Op.or]: {
            title: { [Op.iLike]: `%${filter}%` },
            '$author.alias$': { [Op.iLike]: `%${filter}%` },
            '$author.surnames$': { [Op.iLike]: `%${filter}%` },
            '$author.names$': { [Op.iLike]: `%${filter}%` },
            '$deway.description$': { [Op.iLike]: `%${filter}%` },
            '$publisher.name$': { [Op.iLike]: `%${filter}%` },
          },
        }
      : null;

    const { count, rows } = await this.bookRepository.findAndCountAll({
      where: whereOptions,
      include: [
        {
          model: Summary3,
          include: [
            {
              model: Summary2,
              include: [{ model: Summary1 }],
            },
          ],
        },
        { model: Author },
        Publisher,
      ],
      limit,
      offset,

      order: [['createdAt', 'DESC']],
    });

    return this.paginationService.paginate({
      apiMethod: EApiMethods.FIND_ALL_PAGINATE,
      apiRoute: ERoutes.BOOKS,
      data: rows,
      limit,
      page: rest.page,
      total: count,
    });
  }

  async findOne(id: number): Promise<Book> {
    const book = await this.findByPk(id);

    if (!book) throw new NotFoundException(BOOK_NOT_FOUND_MESSAGE);

    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const { title, author_id, edition } = updateBookDto;

    await this.validateDuplicate(title, author_id, edition);

    const book = await this.findOne(id);

    try {
      await book.update(updateBookDto);
      return this.findByPk(id);
    } catch (error) {
      handlerExceptions(error);
    }
  }

  async changeStatus(id: number): Promise<void> {
    const book = await this.bookRepository.findOne({
      where: { id },
      paranoid: false,
    });

    if (book.deletedAt) await book.restore();
    else await book.destroy();
  }

  private async findByPk(id: number): Promise<Book> {
    const book = await this.bookRepository.findByPk(id, {
      include: [
        {
          model: Summary3,
          paranoid: false,
          include: [
            {
              model: Summary2,
              paranoid: false,
              include: [{ model: Summary1, paranoid: false }],
            },
          ],
        },
        { model: Author, paranoid: false },
        Publisher,
      ],
    });

    return book;
  }

  private async validateDuplicate(
    title: string,
    authorId: number,
    edition: number,
  ): Promise<void> {
    const book = await this.bookRepository.findOne({
      where: { title, author_id: authorId, edition },
    });

    if (book) throw new BadRequestException(BOOK_ALREADY_EXISTS_MESSAGE);
  }
}
