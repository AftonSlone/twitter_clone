import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Auditable } from "./Auditable";

@Entity()
export class Like extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cheepId: number;

  @Column()
  userId: number;
}
