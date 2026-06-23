import express from 'express';
import {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
  markReviewHelpful,
  approveReview,
} from '../controllers/review.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', getReviews);
router.get('/:id', getReview);
router.post('/', createReview);
router.patch('/:id/helpful', markReviewHelpful);

// Protected routes (Admin only)
router.put('/:id', authenticate, authorize('admin'), updateReview);
router.delete('/:id', authenticate, authorize('admin'), deleteReview);
router.patch('/:id/approve', authenticate, authorize('admin'), approveReview);

export default router;

// Made with Bob
