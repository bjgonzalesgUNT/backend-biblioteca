import { Role } from 'src/modules/role/role.entity';

export interface IPayload {
  usu_email: string;
  roles: Role[];
}
