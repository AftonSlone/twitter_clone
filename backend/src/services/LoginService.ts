import UserRepository from "../repository/UserRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class LoginService {
  async login(email: string, password: string) {
    const user = await UserRepository.findOneByOrFail({
      email,
    });

    if (user) {
      const match = await compare(password, user.password);

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
  }
}
