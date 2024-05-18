import { InternalServerErrorException } from '@nestjs/common';
import { BaseError } from 'sequelize';

export const handlerExceptions = (error: any) => {
  if (error instanceof BaseError) {
    throw new InternalServerErrorException({ error: error.name });
  } else {
    throw new InternalServerErrorException({ error });
  }
};
