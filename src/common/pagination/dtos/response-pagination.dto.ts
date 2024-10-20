import { ApiProperty } from '@nestjs/swagger';

export class ResponsePaginationDto<T> {
  @ApiProperty()
  count: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  currentPage: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  prev: string | null;

  @ApiProperty()
  next: string | null;

  @ApiProperty({ type: [Object] })
  rows: T[];
}
