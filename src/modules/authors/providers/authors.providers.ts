import { AUTHOR_REPOSITORY } from '@/core/constants';
import { Provider } from '@nestjs/common';
import { Author } from '../entities/author.entity';

export const authorsProviders: Provider[] = [
  {
    provide: AUTHOR_REPOSITORY,
    useValue: Author,
  },
];