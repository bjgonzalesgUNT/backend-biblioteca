import { ERoutes } from '@/common/enums';
import { EApiMethods } from '@/common/enums/methods.api';
import {
  CreatePaginationDto,
  PaginationService,
  ResponsePaginationDto,
} from '@/common/pagination';
import { USER_REPOSITORY } from '@/core/constants';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly paginationService: PaginationService,
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async findAllPaginate(
    createPaginationDto?: CreatePaginationDto,
  ): Promise<ResponsePaginationDto<User>> {
    const { count, rows } = await this.userRepository.findAndCountAll({
      ...this.paginationService.generate(createPaginationDto),
    });

    if (rows.length === 0) throw new NotFoundException();

    return this.paginationService.paginate<User>({
      apiMethod: EApiMethods.FIND_ALL,
      apiRoute: ERoutes.USERS,
      total: count,
      data: rows,
      page: createPaginationDto.page,
      limit: createPaginationDto.limit,
    });
  }
}
