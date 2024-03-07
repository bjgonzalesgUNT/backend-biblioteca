import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { BaseError } from 'sequelize';

export const databaseError = (error: any) => {
  if (error instanceof BaseError) {
    console.log(error);
    throw new BadRequestException({
      errors: error['errors'].map(({ message }) => message),
    });
  } else {
    console.error(error);
    throw new InternalServerErrorException('Error en la base de datos');
  }
};
