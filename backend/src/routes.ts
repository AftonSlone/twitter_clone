import { CheepController } from "./controller/CheepController";
import { CheepPhotoController } from "./controller/CheepPhotoController";
import { LikesController } from "./controller/LikesController";
import { LoginController } from "./controller/LoginController";
import { RecheepController } from "./controller/RecheepController";
import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "post",
    route: "/login",
    controller: LoginController,
    action: "login",
  },
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },
  {
    method: "get",
    route: "/cheeps",
    controller: CheepController,
    action: "all",
  },
  {
    method: "get",
    route: "/cheeps/:id",
    controller: CheepController,
    action: "one",
  },
  {
    method: "post",
    route: "/cheeps",
    controller: CheepController,
    action: "save",
  },
  {
    method: "delete",
    route: "/cheeps/:id",
    controller: CheepController,
    action: "remove",
  },
  {
    method: "get",
    route: "/recheeps",
    controller: RecheepController,
    action: "all",
  },
  {
    method: "get",
    route: "/recheeps/:id",
    controller: RecheepController,
    action: "one",
  },
  {
    method: "post",
    route: "/recheeps",
    controller: RecheepController,
    action: "save",
  },
  {
    method: "delete",
    route: "/recheeps/:id",
    controller: RecheepController,
    action: "remove",
  },
  {
    method: "get",
    route: "/cheepphotos",
    controller: CheepPhotoController,
    action: "all",
  },
  {
    method: "get",
    route: "/cheepphotos/:id",
    controller: CheepPhotoController,
    action: "one",
  },
  {
    method: "post",
    route: "/cheepphotos",
    controller: CheepPhotoController,
    action: "save",
  },
  {
    method: "delete",
    route: "/cheepphotos/:id",
    controller: CheepPhotoController,
    action: "remove",
  },
  {
    method: "get",
    route: "/likes",
    controller: LikesController,
    action: "all",
  },
  {
    method: "get",
    route: "/likes/:id",
    controller: LikesController,
    action: "one",
  },
  {
    method: "post",
    route: "/likes",
    controller: LikesController,
    action: "save",
  },
  {
    method: "delete",
    route: "/likes/:id",
    controller: LikesController,
    action: "remove",
  },
];
