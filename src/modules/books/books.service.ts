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
import { Summary1, Summary2, Summary3 } from '../summaries/entities';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities';

@Injectable()
export class BooksService {
  constructor(
    private readonly paginationService: PaginationService,
    @Inject(BOOK_REPOSITORY) private readonly bookRepository: typeof Book,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const { title } = createBookDto;

    await this.verifyTitle(title);

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
          include: [{ model: Summary2, include: [Summary1] }],
        },
      ],
      limit,
      offset,
      paranoid: false,
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

  async findOne(id: number): Promise<Book> {
    const book = await this.findByPk(id);

    if (!book) throw new NotFoundException(BOOK_NOT_FOUND_MESSAGE);

    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const { title } = updateBookDto;

    if (title) await this.verifyTitle(title);

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
          include: [{ model: Summary2, include: [Summary1] }],
        },
      ],
    });

    return book;
  }

  private async verifyTitle(title: string): Promise<void> {
    const book = await this.bookRepository.findOne({ where: { title } });

    if (book) throw new BadRequestException(BOOK_ALREADY_EXISTS_MESSAGE);
  }
}
