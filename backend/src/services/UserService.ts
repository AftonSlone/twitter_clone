import { NextFunction, Request, Response } from "express";
import UserRepository from "../repository/UserRepository";
import { hash } from "bcrypt";

export class UserService {
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
    // if (request.method === "PUT") {
    //   const updatedUser = {
    //     ...request.body.user,
    //     email: request.body.email,
    //     password: request.body.password,
    //     firstName: request.body.firstName,
    //     lastName: request.body.lastName,
    //   };
    // }
    const hashedPassword = await hash(request.body.password, 10);
    const newUser = await { ...request.body, password: hashedPassword };
    return UserRepository.save(newUser);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const userToRemove = await UserRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (userToRemove) throw new Error("This User was not found");
    await UserRepository.remove(userToRemove);
  }
}
