import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Auditable } from "./Auditable";

@Entity()
export class Recheep extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cheepId: number;

  @Column()
  userId: number;
}
