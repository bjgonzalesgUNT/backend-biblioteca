import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ApiRoutes } from 'src/core/api';
import { USER_REPOSITORY } from '../../../core/constants';
import { RPagination } from '../../../core/dto';
import { PaginationDto } from '../../../core/dto/pagination/pagination.dto';
import { User } from '../user.entity';
import { ApiMethods } from './../../../core/api/methods.api';
import { PaginationService } from './../../../core/pagination/services/pagination.service';

@Injectable()
export class UserService {
  constructor(
    private readonly paginationService: PaginationService,
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async findAll(
    paginationDto?: PaginationDto,
  ): Promise<RPagination<User>> {
    const { count, rows } = await this.userRepository.findAndCountAll({
      ...this.paginationService.generate(paginationDto),
    });

    if (rows.length === 0) throw new NotFoundException();

    return this.paginationService.create<User>({
      apiMethod: ApiMethods.FIND_ALL,
      apiRoute: ApiRoutes.USER,
      total: count,
      data: rows,
      page: paginationDto.page,
      limit: paginationDto.limit,
    });
  }
}
