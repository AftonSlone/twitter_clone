import { NextFunction, Request, Response, Router } from "express";
import { verifyToken } from "../customMiddleware/Authorization";
import { CheepPhotoService } from "../services/CheepPhotoService";

export const cheepPhotoRouter = Router();
const cheepPhotoService = new CheepPhotoService();

cheepPhotoRouter.get(
  "/",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await cheepPhotoService.all(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

cheepPhotoRouter.get(
  "/:id",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await cheepPhotoService.one(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

cheepPhotoRouter.post(
  "/",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await cheepPhotoService.save(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);

cheepPhotoRouter.delete(
  "/:id",
  verifyToken,
  async (request: Request, responce: Response, next: NextFunction) => {
    try {
      const results = await cheepPhotoService.remove(request, responce, next);
      responce.json(results);
    } catch (e) {
      next(e);
    }
  }
);
