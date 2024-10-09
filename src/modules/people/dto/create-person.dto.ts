import { textTransform } from '@/common/helpers';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsDate, IsNotEmpty, Matches } from 'class-validator';

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
  @Matches(/^[0-9]{8,10}$/, {
    message: 'El documento debe tener entre 8 y 10 dígitos',
  })
  document: string;

  @ApiProperty()
  @IsNotEmpty()
  telephone: string;

  @ApiProperty()
  @IsNotEmpty()
  gender: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  date: Date;

  @ApiProperty()
  @IsNotEmpty()
  address: string;
}
