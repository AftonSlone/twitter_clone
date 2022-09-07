import { NextFunction, Request, Response, Router } from "express";
import { verifyToken } from "../customMiddleware/Authorization";
import { CheepService } from "../services/CheepService";

export const cheepRouter = Router();
const cheepService = new CheepService();

cheepRouter.get(
  "/",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await cheepService.all(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

cheepRouter.get(
  "/:id",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await cheepService.one(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

cheepRouter.post(
  "/",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await cheepService.save(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

cheepRouter.delete(
  "/:id",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await cheepService.remove(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);
