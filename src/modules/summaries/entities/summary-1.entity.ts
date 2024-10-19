import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Summary2 } from './summary-2.entity';

@Table({
  schema: 'biblioteca',
  tableName: 'summary_1',
  timestamps: true,
  paranoid: true,
})
export class Summary1 extends Model<Summary1> {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

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

  @HasMany(() => Summary2)
  summaries2: Summary2[];
}
