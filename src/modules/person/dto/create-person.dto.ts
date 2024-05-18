import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty()
  @IsNotEmpty()
  per_ape_pat: string;

  @ApiProperty()
  @IsNotEmpty()
  per_ape_mat: string;

  @ApiProperty()
  @IsNotEmpty()
  per_nombres: string;

  @ApiProperty()
  @IsNotEmpty()
  per_nacionalidad: string;

  @ApiProperty()
  @IsNotEmpty()
  per_num_doc: string;

  @ApiProperty()
  @IsNotEmpty()
  per_num_tel: string;

  @ApiProperty()
  @IsNotEmpty()
  per_genero: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  per_fec_nac: string;

  @ApiPropertyOptional()
  @IsOptional()
  per_domicilio: string;
}
