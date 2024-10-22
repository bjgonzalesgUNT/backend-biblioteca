import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty()
  @IsNotEmpty()
  surnames: string;

  @ApiProperty()
  @IsNotEmpty()
  names: string;

  @ApiProperty()
  @IsNotEmpty()
  nationality: string;

  @ApiProperty()
  @IsNotEmpty()
  gender: string;

  @ApiPropertyOptional()
  @IsOptional()
  alias?: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  image_url?: string;
}
