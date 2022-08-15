import { NextFunction, Request, Response } from "express";
import RecheepRepository from "../repository/RecheepRepository";

export class RecheepController {
  async all(request: Request, response: Response, next: NextFunction) {
    return RecheepRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return RecheepRepository.findOne({
      where: {
        id: parseInt(request.params.id),
      },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return RecheepRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const recheepToRemove = await RecheepRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (recheepToRemove) throw new Error("This Recheep was not found");
    await RecheepRepository.remove(recheepToRemove);
  }
}
