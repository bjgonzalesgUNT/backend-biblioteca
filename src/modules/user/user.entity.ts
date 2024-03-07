import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Employee } from '../employee/employee.entity';
import { Rol } from '../rol/rol.entity';
import { UserRol } from '../user-rol/user-rol.entity';

@Table({
  schema: 'sistemas',
  tableName: 'usuarios',
  timestamps: true,
  paranoid: true,
})
export class User extends Model<User> {
  @ApiProperty()
  @Column({
    type: DataType.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  })
  usu_id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  usu_email: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  usu_password: string;

  @ApiProperty()
  @ForeignKey(() => Employee)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  usu_tra_id: number;

  @BelongsToMany(() => Rol, () => UserRol)
  roles: Rol[];

  @BelongsTo(() => Employee, { foreignKey: 'usu_tra_id' })
  employee: Employee;
}
