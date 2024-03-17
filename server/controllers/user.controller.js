// export const test = (req,res)=> {res.json({message:"API working",});
// }
import User from "../models/user.model.js";
import { calculateDistance } from "../utils/distanceCalculator.js";
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';


export const getNearestUsers = async (req, res, next) => {
    const currentUserId = req.user.id; 
    
    try {
        const currentUser = await User.findById(currentUserId);
        if (!currentUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const users = await User.find({ _id: { $ne: currentUserId } }); // Exclude current user
        const distances = users.map(user => ({
            ...user.toObject(),
            distance: calculateDistance(currentUser.latitude, currentUser.longitude, user.latitude, user.longitude)
        }));

        distances.sort((a, b) => a.distance - b.distance); // Sort users by distance

        const nearestUsers = distances.slice(0, 5); // Get 5 nearest users

        res.json(nearestUsers);
    } catch (error) {
        next(error);
    }
};

export const updateProfile = async (req, res) => {
    const currentUserId = req.user.id // Assuming you're getting the user's ID from JWT authentication
    const { username,email,phone,zipCode,profilePic,latitude, longitude } = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        currentUserId,
        { username,email,phone,zipCode,profilePic,latitude, longitude},
        { new: true } //  returns the document after update
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user profile', error: error.message });
    }
  };
  
  // In server/routes/user.route.js
//   import express from 'express';
//   import { updateProfile } from '../controllers/user.controller.js';
//   import authenticateToken from '../middleware/authenticateToken';
  
//   const router = express.Router();
  
//   router.put('/profile', authenticateToken, updateProfile);
  
//   export default router;
  
