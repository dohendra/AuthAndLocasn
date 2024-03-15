import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async(req,res,next)=>
{ 
    const {username,email,password,phone,zipCode,profilePic}=req.body;
    const hashedPassword= bcryptjs.hashSync(password,8);
  const newUser = new User({username: username,
    email: email,
    password: hashedPassword,
    phone: phone,
    zipCode: zipCode,
    profilePic: profilePic,});
  try {
      await newUser.save();
      res.status(201).json({message:"user created successfully"});
    
  } catch (error) {
      // res.status(500).json(error.message); 
      next(error);
        // next(errorHandler(500."server error"))
}
};
//sign up page completed
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'Email not found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Recheck the password'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
}; 
