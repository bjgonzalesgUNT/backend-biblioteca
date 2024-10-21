import { Injectable, Inject } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { AUTHOR_REPOSITORY } from '@/core/constants';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject(AUTHOR_REPOSITORY) private readonly authorRepository: typeof Author,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorRepository.create<Author>(createAuthorDto);
  }

  async findAll(): Promise<Author[]> {
    return this.authorRepository.findAll();
  }

  async findOne(id: number): Promise<Author> {
    return this.authorRepository.findByPk(id);
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<[number]> {
    return this.authorRepository.update(updateAuthorDto, {
      where: { id },
    });
  }

  async remove(id: number): Promise<void> {
    const author = await this.findOne(id);
    if (author) {
      await author.destroy();
    }
  }
}