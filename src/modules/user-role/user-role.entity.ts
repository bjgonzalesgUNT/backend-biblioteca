import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.entity';
import { Role } from '../role/role.entity';

@Table({
  schema: 'sistemas',
  tableName: 'usuarios_roles',
})
export class UserRole extends Model<UserRole> {
  @ApiProperty()
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  usr_id: number;

  @ApiProperty()
  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  usr_rol_id: number;

  @ApiProperty()
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  usr_usu_id: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Role)
  role: Role;
}
