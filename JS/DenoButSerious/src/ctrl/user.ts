// deno-lint-ignore-file no-explicit-any
import { Response } from "express";
import User from "../modals/User.ts";
import { AuthReq } from "../mware/auth.ts";

// GET /api/users — listar todos (admin)
export const getUsers = async (_req: AuthReq, res: Response): Promise<void> => {
  const users = await User.find().select("-__v");
  res.json({ count: users.length, data: users });
};

// GET /api/users/me — perfil do usuário logado
export const getMe = async (req: AuthReq, res: Response): Promise<void> => {
  const user = await User.findById(req.uID);
  res.json(user);
};

// PUT /api/users/me — atualizar perfil
export async function updateMe(req: AuthReq, res: Response) {
  const allowed = { name: req.body.name }; // campos permitidos
  let user;
  try {
    user = await User.findByIdAndUpdate(req.uID, allowed, {
      new: true,
      runValidators: true,
    });
  } catch (e: any) {
    if (e.code == 11000) {
      return res.status(400).json({
        status: "FAIL",
        message: "USERNAME_EXISTS",
      });
    }
    console.log(e);
    res.status(500).json({ status: "FAIL", message: "SRV_ERR" });
  }
  res.json(user);
}

// DELETE /api/users/me — deletar conta
export const deleteMe = async (req: AuthReq, res: Response): Promise<void> => {
  await User.findByIdAndDelete(req.uID);
  res.status(204).send();
};
