import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Veiculo } from "./Veiculo";
import { Servico } from "./Servicos";

@Entity()
@Unique(["email", "cpf"])
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  nome!: string;

  @Column({ type: "varchar", nullable: false, length: 255 })
  email!: string;

  @Column({ type: "char", length: 11, nullable: false })
  cpf!: string;

  @Column({ type: "char", length: 11, nullable: false })
  telefone!: string;

  @OneToMany(() => Veiculo, (veiculo) => veiculo.user)
  veiculo!: Veiculo[];

  @OneToMany(() => Servico, (servico) => servico.user)
  servico!: Servico[];

  @CreateDateColumn({ type: Date })
  createdAt!: Date;
}
