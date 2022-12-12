import { NextFunction, Request, Response } from "express";
import UserRepository from "../repository/UserRepository";
import { hash } from "bcrypt";
import { User } from "../entity/User";

export class UserService {
  async all() {
    return UserRepository.find({
      relations: {
        cheeps: true,
        following: true,
        followers: true,
      },
    });
  }

  async one(id: number) {
    return UserRepository.findOne({
      where: {
        id,
      },
      relations: {
        cheeps: true,
        following: true,
        followers: true,
      },
    });
  }

  async save(user: User) {
    let newUser = new User();
    if (user.id) {
      newUser = await UserRepository.findOneBy({
        id: user.id,
      });
    } else {
      newUser.password = await hash(user.password, 10);
    }
    newUser.email = user.email;
    newUser.name = user.name;
    newUser.username = user.username;

    return UserRepository.save(newUser);
  }

  async remove(id: number) {
    const userToRemove = await UserRepository.findOneBy({
      id,
    });
    if (userToRemove) throw new Error("This User was not found");
    await UserRepository.remove(userToRemove);
  }
}
