import { NextFunction, Request, Response, Router } from "express";
import { LoginService } from "../services/LoginService";

export const loginRouter = Router();
const loginService = new LoginService();

loginRouter.post(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const results = await loginService.login(
        request.body.email,
        request.body.password
      );
      response.json(results);
    } catch (e) {
      next(e);
    }
  }
);
