// export const test = (req,res)=> {res.json({message:"API working",});
// }
import User from "../models/user.model.js";
import { calculateDistance } from "../utils/distanceCalculator.js";

export const getNearestUsers = async (req, res, next) => {
    const currentUserId = req.user.id; 
    console.log(req.user.id)// Assuming you have middleware to decode JWT and set req.user
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
