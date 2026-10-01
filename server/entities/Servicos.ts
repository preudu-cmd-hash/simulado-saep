import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Veiculo } from "./Veiculo";

@Entity()
export class Servico {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => User, (user) => user.servico)
  user!: User;

  @OneToOne(() => Veiculo, (veiculo) => veiculo.servico)
  veiculo!: Veiculo;

  @CreateDateColumn({type: Date})
  dataEmissao!: Date
}
