import { ApiProperty } from '@nestjs/swagger';
import { LoginDto } from './login.dto';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class SignUpDto extends LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  personId: number;
}
