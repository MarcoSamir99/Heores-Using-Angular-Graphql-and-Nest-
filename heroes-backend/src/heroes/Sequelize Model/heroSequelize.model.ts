import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Hero extends Model {

  @Column({primaryKey: true})
  id: number;

  @Column
  name: string;

}