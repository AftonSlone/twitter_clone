import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Auditable } from "./Auditable";
import { CheepPhoto } from "./CheepPhoto";
import { User } from "./User";

@Entity()
export class Cheep extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.cheeps)
  user: User;

  @OneToMany(() => CheepPhoto, (cheepPhoto) => cheepPhoto.cheep)
  photos: CheepPhoto[];
}
