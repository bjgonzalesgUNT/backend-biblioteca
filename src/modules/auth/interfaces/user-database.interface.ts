export interface IUserDB {
  usu_id: number;
  usu_email: string;
  usu_password: string;
  roles: IRoleDB[];
}

export interface IRoleDB {
  rol_id: number;
  rol_nombre: string;
}
