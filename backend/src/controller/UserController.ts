import { NextFunction, Request, Response } from "express";
import UserRepository from "../repository/UserRepository";

export class UserController {
  async all(request: Request, response: Response, next: NextFunction) {
    return UserRepository.find({
      relations: {
        cheeps: true,
        following: true,
        followers: true,
      },
    });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return UserRepository.findOne({
      where: {
        id: parseInt(request.params.id),
      },
      relations: {
        cheeps: true,
        following: true,
        followers: true,
      },
    });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return UserRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const userToRemove = await UserRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (userToRemove) throw new Error("This User was not found");
    await UserRepository.remove(userToRemove);
  }
}
