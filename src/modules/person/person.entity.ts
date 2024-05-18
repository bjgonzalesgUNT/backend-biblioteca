import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeCreate,
  BeforeUpdate,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  schema: 'sistemas',
  tableName: 'personas',
  paranoid: true,
})
export class Person extends Model<Person> {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  per_id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  per_ape_pat: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  per_ape_mat: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  per_nombres: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  per_nacionalidad: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  per_num_doc: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  per_num_tel: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  per_genero: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  per_fec_nac: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  per_domicilio: string;

  @BeforeCreate
  @BeforeUpdate
  static toUpperCase(entity: Person) {
    entity.per_ape_mat = entity.per_ape_mat.toUpperCase();
    entity.per_ape_pat = entity.per_ape_mat.toUpperCase();
    entity.per_nombres = entity.per_nombres.toUpperCase();
    entity.per_nacionalidad = entity.per_nacionalidad.toUpperCase();
    entity.per_genero = entity.per_genero?.toUpperCase();
    entity.per_domicilio = entity.per_domicilio?.toUpperCase();
  }
}
