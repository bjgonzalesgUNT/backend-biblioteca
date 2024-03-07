import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { USER_REPOSITORY } from '../../../core/constants';
import { User } from '../user.entity';
import { PaginationDto } from '../../../core/dto/pagination.dto';
import { UserR } from '../dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async findAll(paginationDto?: PaginationDto): Promise<UserR> {
    const { limit, offset } = paginationDto;
    const query = await this.userRepository.findAndCountAll({ limit, offset });
    if (query.count === 0)
      throw new NotFoundException('No se encontraron resultados');
    return query;
  }
}
