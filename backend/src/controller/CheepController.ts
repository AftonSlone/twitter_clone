import { NextFunction, Request, Response } from "express";
import CheepRepository from "../repository/CheepRepository";

export class CheepController {
  async all(request: Request, response: Response, next: NextFunction) {
    return CheepRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return CheepRepository.findOne({
      where: {
        id: parseInt(request.params.id),
      },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return CheepRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const cheepToRemove = await CheepRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (cheepToRemove) throw new Error("This Cheep was not found");
    await CheepRepository.remove(cheepToRemove);
  }
}
