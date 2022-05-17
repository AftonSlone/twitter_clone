import { Contains, IsEmail, Length } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsUsername } from "../customValidators/isUsername";
import { Auditable } from "./Auditable";

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
}
