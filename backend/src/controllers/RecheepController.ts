import { NextFunction, Request, Response, Router } from "express";
import { verifyToken } from "../customMiddleware/Authorization";
import { RecheepService } from "../services/reCheepService";

export const recheepRouter = Router();
const recheepService = new RecheepService();

recheepRouter.get(
  "/",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await recheepService.all(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

recheepRouter.get(
  "/:id",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await recheepService.one(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

recheepRouter.post(
  "/",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await recheepService.save(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

recheepRouter.delete(
  "/:id",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await recheepService.remove(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);
