import { Person } from '@/modules/people/entities';
import { Role } from '@/modules/roles/entities';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  schema: 'sistemas',
  tableName: 'users',
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
  id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  password: string;

  @ApiProperty()
  @ForeignKey(() => Person)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
  })
  person_id: number;

  @ApiProperty()
  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  role_id: number;

  @BelongsTo(() => Person)
  person: Person;

  @BelongsTo(() => Role)
  role: Role;
}
