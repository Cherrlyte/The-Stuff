// deno-lint-ignore-file no-explicit-any
import jwt from "jsonwebtoken";
import User from "../modals/User.ts";
import mongoose from "mongoose";
import { Request, Response } from "express";

function genToken(id: mongoose.Types.ObjectId) {
  const result = jwt.sign(
    { id: id },
    Deno.env.get("JWT_TOKEN")!,
    { expiresIn: `${Deno.env.get("JWT_EXPIRY_TIME")}` as any },
  );
  return result;
}

export async function register(req: Request, res: Response) {
  try {
    const { name, email, accessKey } = req.body;
    const newUser = await User.create({ name, accessKey: accessKey, email });
    const webToken = genToken(newUser._id);
    res.status(201).json({
      status: "success",
      webToken,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err: any) {
      if (err.code == 11000) return res.status(400).json({ status: "FAIL", message: "EMAIL_OR_USER_EXISTS" })
      if (err.code == 909) return res.status(400).json({status: "FAIL", message: "PASS_SHORT"})
    console.log(err);
    res.status(500).json({ err: "Unhandled server error" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, accessKey } = req.body;
    if (!email || !accessKey) {
      return res.status(400).json({ err: "Something went wrong." });
    }

    const foundUser = await User.findOne({ email }).select("+accessKey");
    if (!foundUser || !(await foundUser.checkHashes(accessKey))) {
      return res.status(400).json({ err: "Something went wrong." });
    }

    const token = genToken(foundUser._id);
    res.status(200).json({
      status: "Success",
      token,
      user: { id: foundUser._id, name: foundUser.name, email: foundUser.email },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Unhandled server error." });
  }
}
