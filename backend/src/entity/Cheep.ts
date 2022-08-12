import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Auditable } from "./Auditable";
import { CheepPhoto } from "./CheepPhoto";
import { Recheep } from "./Recheep";
import { Reply } from "./Reply";
import { User } from "./User";

@Entity()
export class Cheep extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.cheeps)
  user: User;

  @OneToMany(() => CheepPhoto, (cheepPhoto) => cheepPhoto.cheep)
  photos: CheepPhoto[];

  @OneToMany(() => Reply, (reply) => reply.cheep)
  replies: Reply[];

  @OneToMany(() => Recheep, (recheep) => recheep.cheep)
  recheeps: Recheep;
}
