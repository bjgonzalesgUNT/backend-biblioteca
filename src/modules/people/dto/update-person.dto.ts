import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdatePersonDto {
  @ApiPropertyOptional()
  @IsOptional()
  telephone: string;

  @ApiPropertyOptional()
  @IsOptional()
  address: string;
}
