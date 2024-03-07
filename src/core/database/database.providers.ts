import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, PRODUCTION, TEST, SEQUELIZE } from '../constants';
import { databaseConfig } from './config/database.config';
import { User } from '../../modules/user/user.entity';
import { UserRole } from '../../modules/user-role/user-role.entity';
import { Role } from '../../modules/role/role.entity';

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

      sequelize.addModels([User, UserRole, Role]);

      return sequelize;
    },
  },
];
