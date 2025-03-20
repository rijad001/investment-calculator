import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Investment {
  @PrimaryGeneratedColumn('uuid')
  tableID: number;

  @Column()
  initialInvestment: number;

  @Column()
  annualInvestment: number;

  @Column()
  expectedReturn: number;

  @Column()
  duration: number;
}