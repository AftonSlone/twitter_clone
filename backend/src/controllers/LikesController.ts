import { NextFunction, Request, Response, Router } from "express";
import { verifyToken } from "../customMiddleware/Authorization";
import { LikesService } from "../services/likesService";

export const likesRouter = Router();
const likesService = new LikesService();

likesRouter.get(
  "/",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await likesService.all(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

likesRouter.get(
  "/:id",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await likesService.one(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

likesRouter.post(
  "/",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await likesService.save(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

likesRouter.delete(
  "/:id",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await likesService.remove(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);
