import { IsEmail } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Auditable } from "./Auditable";
import { Cheep } from "./Cheep";
import { Likes } from "./Likes";
import { Recheep } from "./Recheep";

@Entity()
export class User extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  password: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  username: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;
  @OneToMany(() => Cheep, (cheep) => cheep.user)
  cheeps: Cheep[];

  @OneToMany(() => Likes, (likes) => likes.user)
  likes: Likes[];

  @OneToMany(() => Recheep, (recheep) => recheep.user)
  recheeps: Recheep[];

  @ManyToMany(() => User, (user) => user.followers)
  @JoinTable()
  following: User[];

  @ManyToMany(() => User, (user) => user.following)
  followers: User[];
}
