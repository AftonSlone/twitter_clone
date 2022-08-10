import { Contains, IsEmail, Length } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Like } from "typeorm";
import { IsUsername } from "../customValidators/isUsername";
import { Auditable } from "./Auditable";
import { Cheep } from "./Cheep";
import { Likes } from "./Likes";

@Entity()
export class User extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsUsername()
  userName: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @OneToMany(() => Cheep, (cheep) => cheep.user)
  cheeps: Cheep[]

  @OneToMany(() => Likes, (likes) => likes.user)
  likes: Likes[]
}
