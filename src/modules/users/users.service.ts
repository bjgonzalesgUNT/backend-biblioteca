import { EApiMethods, ERoutes } from '@/common/enums';
import {
  CreatePaginationDto,
  PaginationService,
  ResponsePaginationDto,
} from '@/common/pagination';
import { USER_REPOSITORY, USERS_NOT_FOUND_MESSAGE } from '@/core/constants';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { QueryTypes } from 'sequelize';
import { UserDB } from './dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly paginationService: PaginationService,
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async findAllPaginate(
    createPaginationDto?: CreatePaginationDto,
  ): Promise<any> {
    const { limit, offset } =
      this.paginationService.generate(createPaginationDto);

    const [{ data }] = (await this.userRepository.sequelize.query(
      'select * from sistemas.fn_get_users_paginate(?,?)',
      {
        type: QueryTypes.SELECT,
        replacements: [limit, offset],
      },
    )) as [{ data: ResponsePaginationDto<UserDB> }];

    const { rows, count } = data;

    if (!rows) throw new NotFoundException(USERS_NOT_FOUND_MESSAGE);

    return this.paginationService.paginate({
      total: count,
      page: createPaginationDto.page,
      apiMethod: EApiMethods.FIND_ALL_PAGINATE,
      apiRoute: ERoutes.USERS,
      data: rows,
      limit,
    });
  }
}
