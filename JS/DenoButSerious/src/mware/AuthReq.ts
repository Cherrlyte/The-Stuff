import { NextFunction, Request, Response } from "express";

export interface AuthReq extends Request {
  uID?: string;
}
interface JWTPayload {
  id: string;
}

export function protect(req: AuthReq, res: Response, next: NextFunction) {
  const aHeader = req.header;

  if (!aHeader || !aHeader.startsWith("Bearer ")) {
    res.status(401).json(message, "No token!!!");
  }
}
