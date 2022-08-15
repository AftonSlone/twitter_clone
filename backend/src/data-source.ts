import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Auditable } from './entity/Auditable';
import { Cheep } from './entity/Cheep';
import { CheepPhoto } from './entity/CheepPhoto';
// import { Follow } from "./entity/Follow";
import { Likes } from './entity/Likes';
import { Recheep } from './entity/Recheep';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [User, Cheep, CheepPhoto, Recheep, Likes],
  migrations: [],
  subscribers: [],
});
