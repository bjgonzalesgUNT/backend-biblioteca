import { ApiMethods, ERoutes } from '../../../core/api';

export interface PaginationProps<T> {
  total: number;
  page: number;
  limit: number;
  apiRoute: ERoutes | string;
  apiMethod: ApiMethods | string;
  extraParams?: object | null;
  data: T[];
}
