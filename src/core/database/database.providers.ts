import { Sequelize } from 'sequelize-typescript';
import { User } from '../../modules/user/user.entity';
import { DEVELOPMENT, PRODUCTION, SEQUELIZE, TEST } from '../constants';
import { Person } from './../../modules/person/person.entity';
import { Role } from './../../modules/role/role.entity';
import { UserRole } from './../../modules/user-role/user-role.entity';
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

      sequelize.addModels([User, UserRole, Role, Person]);

      return sequelize;
    },
  },
];
