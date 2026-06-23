import express from 'express';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blog.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);

// Protected routes (Admin only)
router.post('/', authenticate, authorize('admin'), createBlog);
router.put('/:id', authenticate, authorize('admin'), updateBlog);
router.delete('/:id', authenticate, authorize('admin'), deleteBlog);

export default router;

// Made with Bob
