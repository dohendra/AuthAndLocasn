import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async(req,res,next)=>
{ 
    const {username,email,password}=req.body;
    const hashedPassword= bcryptjs.hashSync(password,8);
  const newUser = new User({username:username,email:email,password: hashedPassword});
  try {
      await newUser.save();
      res.status(201).json({message:"user created successfully"});
    
  } catch (error) {
      // res.status(500).json(error.message); 
      next(error);
        // next(errorHandler(500."server error"))
}
};