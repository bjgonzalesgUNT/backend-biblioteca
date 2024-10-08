import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { CreatePersonDto } from './create-person.dto';

export class UpdatePersonDto extends PartialType(
  OmitType(CreatePersonDto, ['document'] as const),
) {
  @ApiPropertyOptional()  // Añadir decorador para document
  document?: string;  // Campo document opcional
}