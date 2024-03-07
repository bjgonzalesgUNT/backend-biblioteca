import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from '../role/role.entity';
import { UserRole } from '../user-role/user-role.entity';

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

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}
