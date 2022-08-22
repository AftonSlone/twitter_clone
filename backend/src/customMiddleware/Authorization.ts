import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export function verifyToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const token =
    request.body.token ||
    request.query.token ||
    request.headers["x-access-token"];

  if (!token) {
    return response.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = verify(token, process.env.TOKEN_SECRET);
    request.body = { ...request.body, decoded };
  } catch (err) {
    return response.status(401).send("Invalid Token");
  }
  return next();
}
