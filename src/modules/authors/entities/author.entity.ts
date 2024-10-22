import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  schema: 'biblioteca',
  tableName: 'authors',
  timestamps: true,
  paranoid: true,
})
export class Author extends Model<Author> {
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
  })
  surnames: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  names: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nationality: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  gender: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  alias: string;

  @ApiPropertyOptional()
  @Column({
    type: DataType.STRING,
  })
  image_url?: string;
}
