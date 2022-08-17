import { NextFunction, Request, Response } from "express";
import UserRepository from "../repository/UserRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class LoginController {
  async login(request: Request, response: Response, next: NextFunction) {
    const user = await UserRepository.findOneBy({
      email: request.body.email,
    });

    if (user) {
      const match = await compare(request.body.password, user.password);

      if (match) {
        const accessToken = sign(
          JSON.stringify(user),
          process.env.TOKEN_SECRET
        );
        return {
          token: accessToken,
        };
      }
    }
    return { message: "Invalid Credentials" };
  }
}
