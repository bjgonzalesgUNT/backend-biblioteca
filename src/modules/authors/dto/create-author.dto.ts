import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  surnames: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  names: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  nationality: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  gender: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => value.toUpperCase())
  alias?: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  image_url?: string;
}
