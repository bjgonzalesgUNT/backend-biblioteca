import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Summary2 } from './summary-2.entity';

@Table({
  schema: 'biblioteca',
  tableName: 'summary_3',
  timestamps: true,
  paranoid: true,
})
export class Summary3 extends Model<Summary3> {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty()
  @ForeignKey(() => Summary2)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  summary_2_id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  code: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
}
