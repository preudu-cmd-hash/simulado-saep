import {
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

  @ManyToOne(() => User, (user) => user.veiculo)
  user!: User;

  @ManyToOne(() => Servico, (servico) => servico.veiculo)
  servico!: Servico[];
}
