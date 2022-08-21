import { NextFunction, Request, Response } from "express";
import LikesRepository from "../repository/LikesRepository";

export class LikesService {
  async all(request: Request, response: Response, next: NextFunction) {
    return LikesRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return LikesRepository.findOne({
      where: {
        id: parseInt(request.params.id),
      },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return LikesRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const likesToRemove = await LikesRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (likesToRemove) throw new Error("This Likes was not found");
    await LikesRepository.remove(likesToRemove);
  }
}
