import express from 'express';
import {
  getGalleryItems,
  getGalleryItem,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} from '../controllers/gallery.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', getGalleryItems);
router.get('/:id', getGalleryItem);

// Protected routes (Admin only)
router.post('/', authenticate, authorize('admin'), createGalleryItem);
router.put('/:id', authenticate, authorize('admin'), updateGalleryItem);
router.delete('/:id', authenticate, authorize('admin'), deleteGalleryItem);

export default router;

// Made with Bob
