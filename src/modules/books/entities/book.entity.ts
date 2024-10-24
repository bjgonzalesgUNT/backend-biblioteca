import { Summary3 } from '@/modules/summaries/entities';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  schema: 'biblioteca',
  tableName: 'books',
  timestamps: true,
  paranoid: true,
})
export class Book extends Model<Book> {
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
    unique: true,
  })
  title: string;

  @ApiProperty()
  @ForeignKey(() => Summary3)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  deway_id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  author_id: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  publisher_id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pages: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  edition: number;

  @ApiPropertyOptional()
  @Column({
    type: DataType.STRING,
  })
  path?: string;

  @ApiPropertyOptional()
  @Column({
    type: DataType.STRING,
  })
  image_url?: string;

  @ApiProperty()
  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  published_at: Date;

  @BelongsTo(() => Summary3)
  deway: Summary3;
}
