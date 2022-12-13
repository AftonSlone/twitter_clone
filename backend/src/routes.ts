import { Router } from "express";
import { cheepRouter } from "./controllers/CheepController";
import { cheepPhotoRouter } from "./controllers/CheepPhotoController";
import { likesRouter } from "./controllers/LikesController";
import { loginRouter } from "./controllers/LoginController";
import { recheepRouter } from "./controllers/RecheepController";
import { userRouter } from "./controllers/UserController";

export const router = Router();

router.use("/users", userRouter);
router.use("/login", loginRouter);
router.use("/cheeps", cheepRouter);
router.use("/likes", likesRouter);
router.use("/recheeps", recheepRouter);
router.use("/cheepphotos", cheepPhotoRouter);
