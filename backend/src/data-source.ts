import "reflect-metadata";
import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./config";
import { Cheep } from "./entity/Cheep";
import { CheepPhoto } from "./entity/CheepPhoto";
// import { Follow } from "./entity/Follow";
import { Likes } from "./entity/Likes";
import { Recheep } from "./entity/Recheep";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Cheep, CheepPhoto, Recheep, Likes],
  migrations: [],
  subscribers: [],
});
