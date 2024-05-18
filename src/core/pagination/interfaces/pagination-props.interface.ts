import { ApiMethods, ApiRoutes } from '../../../core/api';

export interface PaginationProps<T> {
  total: number;
  page: number;
  limit: number;
  apiRoute: ApiRoutes | string;
  apiMethod: ApiMethods | string;
  extraParams?: object | null;
  data: T[];
}
