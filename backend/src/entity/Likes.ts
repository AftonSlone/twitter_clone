import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Auditable } from "./Auditable";
import { User } from "./User";

@Entity()
export class Likes extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.likes)
  user: User

  @Column()
  userId: number;
}
