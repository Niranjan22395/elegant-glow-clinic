import express from 'express';
import {
  getDoctors,
  getDoctorBySlug,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from '../controllers/doctor.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', getDoctors);
router.get('/:slug', getDoctorBySlug);

// Protected routes (Admin only)
router.post('/', authenticate, authorize('admin'), createDoctor);
router.put('/:id', authenticate, authorize('admin'), updateDoctor);
router.delete('/:id', authenticate, authorize('admin'), deleteDoctor);

export default router;

// Made with Bob
