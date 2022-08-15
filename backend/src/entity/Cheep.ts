import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Auditable } from './Auditable';
import { CheepPhoto } from './CheepPhoto';
import { Recheep } from './Recheep';
import { User } from './User';

@Entity()
export class Cheep extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Cheep, cheep => cheep.replies)
  replyTo: Cheep;

  @ManyToOne(() => User, user => user.cheeps)
  user: User;

  @OneToMany(() => CheepPhoto, cheepPhoto => cheepPhoto.cheep)
  photos: CheepPhoto[];

  @OneToMany(() => Cheep, reply => reply.replyTo)
  replies: Cheep[];

  @OneToMany(() => Recheep, recheep => recheep.cheep)
  recheeps: Recheep;
}
