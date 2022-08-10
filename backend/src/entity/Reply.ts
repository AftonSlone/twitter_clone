import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Auditable } from "./Auditable";
import { Cheep } from "./Cheep";
import { ReplyPhoto } from "./ReplyPhoto";

@Entity()
export class Reply extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  content: string;

  @ManyToOne(() => Cheep, (cheep) => cheep.replies)
  cheep: Cheep;

  @OneToMany(() => ReplyPhoto, (photo) => photo.reply)
  photos: ReplyPhoto[];
}
