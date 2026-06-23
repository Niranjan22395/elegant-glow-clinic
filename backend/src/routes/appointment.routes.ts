import express from 'express';
import {
  createAppointment,
  getAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
  updateAppointmentStatus,
} from '../controllers/appointment.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/', createAppointment);

// Protected routes (Admin only)
router.get('/', authenticate, authorize('admin', 'staff'), getAppointments);
router.get('/:id', authenticate, authorize('admin', 'staff'), getAppointment);
router.put('/:id', authenticate, authorize('admin', 'staff'), updateAppointment);
router.delete('/:id', authenticate, authorize('admin'), deleteAppointment);
router.patch('/:id/status', authenticate, authorize('admin', 'staff'), updateAppointmentStatus);

export default router;

// Made with Bob
