import { EMPLOYEE_REPOSITORY } from '../../core/constants';
import { Employee } from './employee.entity';

export const employeeProviders = [
  {
    provide: EMPLOYEE_REPOSITORY,
    useValue: Employee,
  },
];
