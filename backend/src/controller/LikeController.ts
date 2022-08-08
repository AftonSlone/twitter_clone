import { NextFunction, Request, Response } from "express";
import LikeRepository from "../repository/LikeRepository";

export class LikeController {
  async all(request: Request, response: Response, next: NextFunction) {
    return LikeRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return LikeRepository.findOne({
      where: {
        id: parseInt(request.params.id),
      },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return LikeRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const likeToRemove = await LikeRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (likeToRemove) throw new Error("This Like was not found");
    await LikeRepository.remove(likeToRemove);
  }
}
