import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUrl } from 'class-validator';

export class UpdateAuthorDto {
  @ApiProperty()
  @IsOptional()
  @IsUrl()
  image_url?: string;
}
