import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { User } from "./User";
import { Servico } from "./Servicos";

@Entity()
@Unique(["placa"])
export class Veiculo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 7 })
  placa!: string;

  @ManyToOne(() => User, (user) => user.veiculo)
  user!: User;

  @ManyToOne(() => Servico, (servico) => servico.veiculo)
  servico!: Servico[];
}
