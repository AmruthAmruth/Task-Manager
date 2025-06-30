import { Request,Response } from "express";

import { registerUser,loginUser } from "../service/authService";

export const register=async (req:Request,res:Response)=>{
    try{
        const {name,email,password}=req.body;
        const user = await registerUser(name,email,password)
        res.status(201).json({ message: "User Registered Successfully!", user });
    }catch(err:any){
         res.status(400).json({ error: err.message });
    }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ message: "Login successful!", token, user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};