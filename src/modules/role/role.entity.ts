import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  schema: 'sistemas',
  tableName: 'roles',
  timestamps: true,
  paranoid: true,
})
export class Role extends Model<Role> {
  @ApiProperty()
  @Column({
    type: DataType.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  })
  rol_id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  rol_nombre: string;
}
