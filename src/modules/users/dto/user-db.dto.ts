import { ApiProperty } from '@nestjs/swagger';

export class UserDB {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  names: string;

  @ApiProperty()
  surnames: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  status: boolean;
}
