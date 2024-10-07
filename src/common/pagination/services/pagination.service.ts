import { envs } from '@/core/config';
import { Injectable } from '@nestjs/common';
import { ResponsePaginationDto } from '../dtos/response-pagination.dto';
import { IPaginationProps, PaginationGenerateProps } from '../interfaces';

@Injectable()
export class PaginationService {
  constructor() {}

  generate(props: PaginationGenerateProps): { limit: number; offset: number } {
    const { page = envs.defaultPage, limit = envs.defaultLimit } = props;

    return {
      limit,
      offset: (page - 1) * limit,
    };
  }

  paginate<T>(props: IPaginationProps<T>): ResponsePaginationDto<T> {
    const { total, page, limit, apiRoute, apiMethod, data, extraParams } =
      props;

    let extraParamsString: string = '';

    if (extraParams) {
      for (const [key, value] of Object.entries(extraParams)) {
        extraParamsString += `&${key}=${value}`;
      }
    }

    return {
      count: data.length,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      prev:
        page - 1 > 0
          ? `${envs.appUrl}/${apiRoute}/${apiMethod}?page=${
              page - 1
            }&limit=${limit}${extraParamsString}`
          : null,
      next:
        page * limit < total
          ? `${envs.appUrl}/${apiRoute}/${apiMethod}?page=${
              page + 1
            }&limit=${limit}${extraParamsString}`
          : null,
      data,
    };
  }
}
