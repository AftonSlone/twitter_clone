import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Auditable } from "./Auditable";
import { Reply } from "./Reply";

@Entity()
export class ReplyPhoto extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photoUrl: string;

  @ManyToOne(() => Reply, (reply) => reply.photos)
  reply: Reply
}
