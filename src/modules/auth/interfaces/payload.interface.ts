import { Rol } from 'src/modules/rol/rol.entity';

export interface PayloadI {
  usu_id: number;
  roles: Rol[];
}
