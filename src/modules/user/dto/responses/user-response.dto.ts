import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user.entity';

export class UserR {
  @ApiProperty()
  count: number;
  @ApiProperty()
  rows: User[];
}
