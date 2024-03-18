import express from 'express';
import authenticateToken from '../middleware.js';
import { getNearestUsers } from '../controllers/user.controller.js'; // You will create this function
import { updateProfile } from '../controllers/user.controller.js';
const router = express.Router();
// Existing route
// router.get('/', test);

// New route for nearest users
router.get('/nearest', getNearestUsers);
router.put('/profile', authenticateToken, updateProfile);
export default router;
