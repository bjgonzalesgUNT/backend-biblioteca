import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Rol } from '../rol/rol.entity';
import { User } from '../user/user.entity';

@Table({
  schema: 'sistemas',
  tableName: 'usuarios_roles',
  timestamps: true,
  paranoid: true,
})
export class UserRol extends Model<UserRol> {
  @ApiProperty()
  @Column({
    type: DataType.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  })
  usr_id: number;

  @ApiProperty()
  @ForeignKey(() => Rol)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  usr_rol_id: number;

  @ApiProperty()
  @ForeignKey(() => User)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  usr_usu_id: number;
}
