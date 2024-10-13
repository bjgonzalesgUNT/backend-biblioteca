import { textTransform } from '@/common/helpers';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, Matches } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => textTransform(value))
  surnames: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => textTransform(value))
  names: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => textTransform(value))
  nacionality: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => String(value))
  @Matches(/^[0-9]{8,12}$/, {
    message: 'El documento debe tener entre 8 y 12 dígitos',
  })
  document: string;

  @ApiPropertyOptional()
  @IsOptional()
  telephone: string;

  @ApiProperty()
  @IsNotEmpty()
  gender: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  date: Date;

  @ApiPropertyOptional()
  @IsOptional()
  address: string;
}
