export interface IPaginationProps<T> {
  total: number;
  page: number;
  limit: number;
  apiRoute: string;
  apiMethod: string;
  extraParams?: object | null;
  data: T[];
}
