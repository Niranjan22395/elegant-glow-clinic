import express from 'express';
import {
  createContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact,
} from '../controllers/contact.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/', createContact);

// Protected routes (Admin only)
router.get('/', authenticate, authorize('admin', 'staff'), getContacts);
router.get('/:id', authenticate, authorize('admin', 'staff'), getContact);
router.patch('/:id/status', authenticate, authorize('admin', 'staff'), updateContactStatus);
router.delete('/:id', authenticate, authorize('admin'), deleteContact);

export default router;

// Made with Bob
