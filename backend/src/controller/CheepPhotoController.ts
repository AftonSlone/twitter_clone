import { NextFunction, Request, Response } from "express";
import CheepPhotoRepository from "../repository/CheepPhotoRepository";

export class CheepPhotoController {
  async all(request: Request, response: Response, next: NextFunction) {
    return CheepPhotoRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return CheepPhotoRepository.findOne({
      where: {
        id: parseInt(request.params.id),
      },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return CheepPhotoRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const cheepPhotoToRemove = await CheepPhotoRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (cheepPhotoToRemove) throw new Error("This CheepPhoto was not found");
    await CheepPhotoRepository.remove(cheepPhotoToRemove);
  }
}
