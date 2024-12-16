import { CreatePaginationDto } from '@/common/pagination';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class QueryFindByFilterPublicDto extends CreatePaginationDto {
  @ApiPropertyOptional()
  @IsOptional()
  filter?: string;
}
