import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePublisherDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
