import { NextFunction, Request, Response } from "express";
import CheepRepository from "../repository/CheepRepository";
import UserRepository from "../repository/UserRepository";

export class CheepController {
  async all(request: Request, response: Response, next: NextFunction) {
    return CheepRepository.find({
      relations: {
        user: true,
        replyTo: true,
      },
    });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return CheepRepository.findOne({
      where: {
        id: parseInt(request.params.id),
      },
      relations: {
        user: true,
      },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const newCheep = {
      user: request.body.decoded,
      content: request.body.content,
    };
    return CheepRepository.save(newCheep);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const cheepToRemove = await CheepRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (cheepToRemove) throw new Error("This Cheep was not found");
    await CheepRepository.remove(cheepToRemove);
  }
}
