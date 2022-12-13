import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import CheepRepository from "../repository/CheepRepository";

export class CheepService {
  async all() {
    return CheepRepository.find({
      relations: {
        user: true,
        replyTo: true,
      },
    });
  }

  async one(id: number) {
    const cheep = CheepRepository.findOne({
      where: {
        id,
      },
      relations: {
        user: true,
      },
    });
    if (cheep) return cheep;
    throw new Error(`Cheep with id ${id} not found!`);
  }

  async save(user: User, content: string) {
    const newCheep = {
      user,
      content,
    };
    return CheepRepository.save(newCheep);
  }

  async remove(id: number) {
    const cheepToRemove = await CheepRepository.findOneBy({
      id,
    });
    if (cheepToRemove) throw new Error("This Cheep was not found");
    await CheepRepository.remove(cheepToRemove);
  }
}
