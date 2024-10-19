import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Summary1 } from './summary-1.entity';
import { Summary3 } from './summary-3.entity';

@Table({
  schema: 'biblioteca',
  tableName: 'summary_2',
  timestamps: true,
  paranoid: true,
})
export class Summary2 extends Model<Summary2> {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty()
  @ForeignKey(() => Summary1)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  summary_1_id: number;

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

  @BelongsTo(() => Summary1)
  summary1: Summary1;

  @HasMany(() => Summary3)
  summaries3: Summary3[];
}
