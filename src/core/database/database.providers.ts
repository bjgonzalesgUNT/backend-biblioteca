import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, PRODUCTION, TEST, SEQUELIZE } from '../constants';
import { databaseConfig } from './config/database.config';
import { User } from '../../modules/user/user.entity';
import { Employee } from '../../modules/employee/employee.entity';
import { UserRol } from '../../modules/user-rol/user-rol.entity';
import { Rol } from '../../modules/rol/rol.entity';
import { Person } from '../../modules/person/person.entity';
import { Position } from '../../modules/position/position.entity';

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

      sequelize.addModels([User, Employee, UserRol, Rol, Person, Position]);

      return sequelize;
    },
  },
];
