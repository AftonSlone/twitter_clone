import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Auditable } from "./Auditable";

@Entity()
export class User extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cheepId: number;

  @Column()
  photoUrl: string;
}
