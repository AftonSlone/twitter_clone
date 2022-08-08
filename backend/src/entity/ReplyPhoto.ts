import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Auditable } from "./Auditable";

@Entity()
export class ReplyPhoto extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  replyId: number;

  @Column()
  photoUrl: string;
}
