import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Auditable } from "./Auditable";
import { Cheep } from "./Cheep";
import { User } from "./User";

@Entity()
export class Recheep extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cheep, (cheep) => cheep.recheeps)
  cheep: Cheep

  @ManyToOne(() => User, (user) => user.recheeps)
  user: User
}
