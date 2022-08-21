import { Router } from "express";
import { loginRouter } from "./controllers/LoginController";
import { userRouter } from "./controllers/UserController";

export const router = Router();

router.use("/users", userRouter);
router.use("/login", loginRouter);
