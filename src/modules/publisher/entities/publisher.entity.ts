import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  schema: 'biblioteca',
  tableName: 'publishers',
  timestamps: true,
  paranoid: true,
})
export class Publisher extends Model<Publisher> {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true, // Aqui se verifica que no haya duplicados
  })
  name: string;
}