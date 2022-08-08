import { NextFunction, Request, Response } from "express";
import ReplyPhotoRepository from "../repository/ReplyPhotoRepository";

export class ReplyPhotoController {
  async all(request: Request, response: Response, next: NextFunction) {
    return ReplyPhotoRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return ReplyPhotoRepository.findOne({
      where: {
        id: parseInt(request.params.id),
      },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return ReplyPhotoRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const replyPhotoToRemove = await ReplyPhotoRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (replyPhotoToRemove) throw new Error("This ReplyPhoto was not found");
    await ReplyPhotoRepository.remove(replyPhotoToRemove);
  }
}
