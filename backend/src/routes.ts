import { CheepController } from "./controller/CheepController";
import { CheepPhotoController } from "./controller/CheepPhotoController";
import { FollowController } from "./controller/FollowController";
import { LikeController } from "./controller/LikeController";
import { RecheepController } from "./controller/RecheepController";
import { ReplyController } from "./controller/ReplyController";
import { ReplyPhotoController } from "./controller/ReplyPhotoController";
import { UserController } from "./controller/UserController";

export const Routes = [
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
    controller: LikeController,
    action: "all",
  },
  {
    method: "get",
    route: "/likes/:id",
    controller: LikeController,
    action: "one",
  },
  {
    method: "post",
    route: "/likes",
    controller: LikeController,
    action: "save",
  },
  {
    method: "delete",
    route: "/likes/:id",
    controller: LikeController,
    action: "remove",
  },
  {
    method: "get",
    route: "/follows",
    controller: FollowController,
    action: "all",
  },
  {
    method: "get",
    route: "/follows/:id",
    controller: FollowController,
    action: "one",
  },
  {
    method: "post",
    route: "/follows",
    controller: FollowController,
    action: "save",
  },
  {
    method: "delete",
    route: "/follows/:id",
    controller: FollowController,
    action: "remove",
  },
  {
    method: "get",
    route: "/replies",
    controller: ReplyController,
    action: "all",
  },
  {
    method: "get",
    route: "/replies/:id",
    controller: ReplyController,
    action: "one",
  },
  {
    method: "post",
    route: "/replies",
    controller: ReplyController,
    action: "save",
  },
  {
    method: "delete",
    route: "/replies/:id",
    controller: ReplyController,
    action: "remove",
  },
  {
    method: "get",
    route: "/replyphotos",
    controller: ReplyPhotoController,
    action: "all",
  },
  {
    method: "get",
    route: "/replyphotos/:id",
    controller: ReplyPhotoController,
    action: "one",
  },
  {
    method: "post",
    route: "/replyphotos",
    controller: ReplyPhotoController,
    action: "save",
  },
  {
    method: "delete",
    route: "/replyphotos/:id",
    controller: ReplyPhotoController,
    action: "remove",
  },
];
