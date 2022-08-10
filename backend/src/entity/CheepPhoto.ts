import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { Auditable } from "./Auditable";
import { Cheep } from "./Cheep";

@Entity()
export class CheepPhoto extends Auditable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photoUrl: string;

  @ManyToOne(() => Cheep, (cheep) => cheep.photos)
  cheep: Cheep;
}
