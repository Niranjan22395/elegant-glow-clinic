import express from 'express';
import {
  register,
  login,
  getMe,
  updatePassword,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/auth.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/login', login);

// Protected routes
router.get('/me', authenticate, getMe);
router.put('/password', authenticate, updatePassword);

// Admin only routes
router.post('/register', authenticate, authorize('admin'), register);
router.get('/users', authenticate, authorize('admin'), getUsers);
router.put('/users/:id', authenticate, authorize('admin'), updateUser);
router.delete('/users/:id', authenticate, authorize('admin'), deleteUser);

export default router;

// Made with Bob
