import { NextFunction, Request, Response, Router } from "express";
import { verifyToken } from "../customMiddleware/Authorization";
import { UserService } from "../services/UserService";

export const userRouter = Router();
const userService = new UserService();

userRouter.get(
  "/",
  verifyToken,
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const results = await userService.all(request, response, next);
      response.json(results);
    } catch (e) {
      next(e);
    }
  }
);
