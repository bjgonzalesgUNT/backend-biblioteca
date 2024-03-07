import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Person } from '../person/person.entity';
import { Position } from '../position/position.entity';

@Table({
  schema: 'sistemas',
  tableName: 'trabajadores',
  timestamps: true,
  paranoid: true,
})
export class Employee extends Model<Employee> {
  @ApiProperty()
  @Column({
    type: DataType.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  })
  tra_id: number;

  @ApiProperty()
  @ForeignKey(() => Person)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  tra_per_id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  tra_cod: string;

  @ApiProperty()
  @ForeignKey(() => Position)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  tra_car_id: number;

  @BelongsTo(() => Person, { foreignKey: 'tra_per_id' })
  person: Person;

  @BelongsTo(() => Position, { foreignKey: 'tra_car_id' })
  employee: Employee;
}
