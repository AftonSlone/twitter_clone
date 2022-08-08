import { NextFunction, Request, Response } from "express";
import FollowRepository from "../repository/FollowRepository";

export class FollowController {
  async all(request: Request, response: Response, next: NextFunction) {
    return FollowRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return FollowRepository.findOne({
      where: {
        id: parseInt(request.params.id),
      },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return FollowRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const followToRemove = await FollowRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (followToRemove) throw new Error("This Follow was not found");
    await FollowRepository.remove(followToRemove);
  }
}
