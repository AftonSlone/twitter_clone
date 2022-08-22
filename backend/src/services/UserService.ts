import { NextFunction, Request, Response } from 'express';
import UserRepository from '../repository/UserRepository';
import { hash } from 'bcrypt';
import { User } from '../entity/User';

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
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;

    return UserRepository.save(newUser);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const userToRemove = await UserRepository.findOneBy({
      id: parseInt(request.params.id),
    });
    if (userToRemove) throw new Error('This User was not found');
    await UserRepository.remove(userToRemove);
  }
}
