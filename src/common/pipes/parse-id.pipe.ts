import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isInt, isPositive } from 'class-validator';

@Injectable()
export class ParseIdPipe implements PipeTransform {
  transform(value: any) {
    value = Number(value);
    if (isInt(value) && isPositive(value)) return value;
    else throw new BadRequestException(`Id no permitido`);
  }
}
