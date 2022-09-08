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
      const results = await cheepService.all();
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
      const results = await cheepService.one(parseInt(request.params.id));
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
      const results = await cheepService.save(
        request.body.decoded,
        request.body.content
      );
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
    const cheep = await cheepService.one(parseInt(request.params.id));
    if (request.body.decoded.id === cheep.user.id) {
      try {
        cheepService.remove(parseInt(request.params.id));
      } catch (e) {
        next(e);
      }
    } else {
      next(new Error("not authorized to delete this cheep"));
    }
  }
);
