import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty()
  surnames: string;

  @ApiProperty()
  names: string;

  @ApiProperty()
  nationality: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  alias?: string;

  @ApiProperty()
  image_url?: string;
}