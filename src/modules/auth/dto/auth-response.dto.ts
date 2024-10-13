import { UserDB } from '@/modules/users/dto';
import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ type: UserDB })
  user: UserDB;

  @ApiProperty()
  token: string;
}
