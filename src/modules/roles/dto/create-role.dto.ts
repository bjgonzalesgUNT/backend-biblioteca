import { textTransform } from '@/common/helpers';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => textTransform(value))
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => textTransform(value))
  description: string;
}
