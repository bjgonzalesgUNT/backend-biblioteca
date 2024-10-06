import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ERoutes } from 'src/core/api';
import { ApiMethods } from '../../core/api/methods.api';
import { USER_REPOSITORY } from '../../core/constants';
import { RPagination } from '../../core/dto';
import { PaginationDto } from '../../core/dto/pagination/pagination.dto';
import { PaginationService } from '../../core/pagination/services/pagination.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly paginationService: PaginationService,
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async findAll(paginationDto?: PaginationDto): Promise<RPagination<User>> {
    const { count, rows } = await this.userRepository.findAndCountAll({
      ...this.paginationService.generate(paginationDto),
    });

    if (rows.length === 0) throw new NotFoundException();

    return this.paginationService.create<User>({
      apiMethod: ApiMethods.FIND_ALL,
      apiRoute: ERoutes.USERS,
      total: count,
      data: rows,
      page: paginationDto.page,
      limit: paginationDto.limit,
    });
  }
}
