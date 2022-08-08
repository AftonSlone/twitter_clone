import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Auditable } from "./Auditable";

@Entity()
export class Cheep extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  content: string;
}
