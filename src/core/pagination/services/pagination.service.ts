import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaginationResponse } from '../../../core/dto';
import { PaginationGenerateProps, PaginationProps } from '../interfaces';
import {
  DEFAULT_LIMIT_KEY,
  DEFAULT_PAGE_KEY,
  HOST_KEY,
  PORT_KEY,
} from './../../constants';

@Injectable()
export class PaginationService {
  private DEFAULT_PAGE: number;
  private DEFAULT_LIMIT: number;
  private HOST: string;
  private PORT: string;

  constructor(private readonly configService: ConfigService) {
    this.DEFAULT_PAGE = +this.configService.get(DEFAULT_PAGE_KEY);
    this.DEFAULT_LIMIT = +this.configService.get(DEFAULT_LIMIT_KEY);
    this.HOST = this.configService.get(HOST_KEY);
    this.PORT = this.configService.get(PORT_KEY);
  }

  generate(props: PaginationGenerateProps): { limit: number; offset: number } {
    const { page = this.DEFAULT_PAGE, limit = this.DEFAULT_LIMIT } = props;

    return {
      limit,
      offset: (page - 1) * limit,
    };
  }

  create<T>(props: PaginationProps<T>): PaginationResponse<T> {
    const {
      total,
      page = this.DEFAULT_PAGE,
      limit = this.DEFAULT_LIMIT,
      apiRoute,
      apiMethod,
      data,
      extraParams,
    } = props;

    let params: string = '';

    if (extraParams) {
      const keys = Object.keys(extraParams);
      keys.forEach((key) => {
        const keyTyped = key as keyof typeof extraParams;
        params += `${key}=${extraParams[keyTyped]}&`;
      });
    }

    const apiPrefix = `${this.HOST}:${this.PORT}`;

    return {
      count: data.length,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      prev:
        page - 1 > 0
          ? `${apiPrefix}/${apiRoute}/${apiMethod}${
              params ? `?${params}` : '?'
            }page=${page - 1}&limit=${limit}`
          : null,
      next:
        page * limit < total
          ? `${apiPrefix}/${apiRoute}/${apiMethod}${
              params ? `?${params}` : '?'
            }page=${page + 1}&limit=${limit}`
          : null,
      data,
    };
  }
}
