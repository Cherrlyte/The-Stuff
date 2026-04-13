import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export interface AuthReq extends Request {
  uID?: string;
}

interface JWTPayload {
  id: string;
}

export function protect(req: AuthReq, res: Response, next: NextFunction) {
  const aHeader = req.headers.authorization;

  if (!aHeader || !aHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "No token found!!!" })
    return
  }
  const tok = aHeader.split(' ')[1]
  try {
    const decode = jwt.verify(tok, Deno.env.get("JWT_TOKEN")!) as JWTPayload
    req.uID = decode.id
    next();
  } catch (e) {
    console.log(e)
    res.status(401).json({message: "Invalid or olden token."})
  }
}
