import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

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

  @CreateDateColumn({ type: Date })
  createdAt!: Date;
}
