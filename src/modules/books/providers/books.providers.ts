import { BOOK_REPOSITORY } from '@/core/constants';
import { Provider } from '@nestjs/common';
import { Book } from '../entities';

export const booksProviders: Provider[] = [
  {
    provide: BOOK_REPOSITORY,
    useValue: Book,
  },
];
