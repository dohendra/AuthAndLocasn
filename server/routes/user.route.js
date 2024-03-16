import express from 'express';
import { getNearestUsers } from '../controllers/user.controller.js'; // You will create this function
const router = express.Router();
// Existing route
// router.get('/', test);

// New route for nearest users
router.get('/nearest', getNearestUsers);

export default router;
