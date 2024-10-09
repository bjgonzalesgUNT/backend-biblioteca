import { ApiProperty } from '@nestjs/swagger';

export class PersonDB {
  @ApiProperty()
  id: number;

  @ApiProperty()
  surnames: string;

  @ApiProperty()
  names: string;

  @ApiProperty()
  nacionality: string;

  @ApiProperty()
  document: string;

  @ApiProperty()
  telephone: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  status: boolean;
}
