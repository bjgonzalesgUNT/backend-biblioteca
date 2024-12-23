import { Author } from '@/modules/authors/entities/author.entity';
import { Book } from '@/modules/books/entities';
import { Person } from '@/modules/people/entities';
import { Publisher } from '@/modules/publishers/entities';
import { Role } from '@/modules/roles/entities';
import { Summary1, Summary2, Summary3 } from '@/modules/summaries/entities';
import { User } from '@/modules/users/entities/user.entity';
import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, PRODUCTION, SEQUELIZE, TEST } from '../constants';
import { databaseConfig } from './config/database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config: any;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize({
        ...config,
        define: { freezeTableName: true },
      });

      sequelize.addModels([
        User,
        Role,
        Person,
        Summary1,
        Summary2,
        Summary3,
        Book,
        Author,
        Publisher,
      ]);

      return sequelize;
    },
  },
];
