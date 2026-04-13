import jwt from "jsonwebtoken";
import User from "../modals/User.ts";
import mongoose from "mongoose";
import {Request, Response} from 'express'


async function genToken(id: mongoose.Types.ObjectId) {
    const result = await jwt.sign(
      { id: id },
      Deno.env.get("JWT_TOKEN")!,
      { expiresIn: `7d` })
    return result
}

export async function register(req:Request, res:Response){
    try{
        const {name, email, passw} = req.body;
        if(await User.findOne(email)){
            return res.status(11000).json({err:"This email already exists. Be more creative."})
        }
        const newUser = await User.create({name, accessKey: passw, email})
        const webToken = genToken(newUser._id);
        res.status(201).json({
            status: "success",
            webToken,
            user:{
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        })
    } catch(err){
        console.log(err)
        res.status(500).json({err: "Unhandled server error"})
    }
}

export async function login(req:Request, res:Response){
    try{
        const {email, accessKey} = req.body
        if(!email || !accessKey){
            return res.status(400).json({err: "Something went wrong."})
        }

        const foundUser = await User.findOne({email}).select("+accessKey")
        if(!foundUser || !(await foundUser.checkHashes(accessKey))){
            return res.status(400).json({err: "Something went wrong."})
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({err: "Unhandled server error."})
    }
}
