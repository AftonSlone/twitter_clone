import { NextFunction, Request, Response, Router } from 'express';
import { verifyToken } from '../customMiddleware/Authorization';
import { UserService } from '../services/UserService';

export const userRouter = Router();
const userService = new UserService();

userRouter.get(
  '/',
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

userRouter.get(
  '/:id',
  verifyToken,
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const results = await userService.one(request, response, next);
      response.json(results);
    } catch (e) {
      next(e);
    }
  }
);

userRouter.delete(
  '/:id',
  verifyToken,
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const results = await userService.remove(request, response, next);
      response.json(results);
    } catch (e) {
      next(e);
    }
  }
);

userRouter.put(
  '/:id',
  verifyToken,
  async (request: Request, response: Response, next: NextFunction) => {
    if (request.body.decoded.id === parseInt(request.params.id)) {
      request.body.id = parseInt(request.params.id);
      try {
        const results = await userService.save(request.body);
        response.json(results);
      } catch (e) {
        next(e);
      }
    } else {
      next(new Error('not authorized to update this user'));
    }
  }
);

userRouter.post(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const results = await userService.save(request.body);
      response.json(results);
    } catch (e) {
      next(e);
    }
  }
);
