import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  deway_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  author_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  publisher_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(10)
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  pages: number;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  edition: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  path?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  image_url?: string;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  published_at: Date;
}
