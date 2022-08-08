import { NextFunction, Request, Response } from "express";
import ReplyRepository from "../repository/ReplyRepository";

export class ReplyController {
  async all(request: Request, response: Response, next: NextFunction) {
    return ReplyRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return ReplyRepository.findOne({
      where: {
        id: parseInt(request.params.id),
      },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return ReplyRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const replyToRemove = await ReplyRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (replyToRemove) throw new Error("This Reply was not found");
    await ReplyRepository.remove(replyToRemove);
  }
}
