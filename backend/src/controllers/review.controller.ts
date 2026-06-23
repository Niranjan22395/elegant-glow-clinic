import { Request, Response, NextFunction } from 'express';
import Review from '../models/Review';
import { AppError } from '../middleware/errorHandler';

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
export const getReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { treatment, featured, approved = 'true', rating } = req.query;

    // Build query
    const query: any = { approved: approved === 'true' };
    if (treatment) query.treatment = treatment;
    if (featured) query.featured = featured === 'true';
    if (rating) query.rating = Number(rating);

    const reviews = await Review.find(query)
      .sort({ featured: -1, createdAt: -1 })
      .select('-email'); // Don't expose email publicly

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single review
// @route   GET /api/reviews/:id
// @access  Public
export const getReview = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const review = await Review.findById(req.params.id).select('-email');

    if (!review) {
      throw new AppError('Review not found', 404);
    }

    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create review
// @route   POST /api/reviews
// @access  Public
export const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Thank you for your review! It will be published after approval.',
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update review
// @route   PUT /api/reviews/:id
// @access  Private (Admin)
export const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!review) {
      throw new AppError('Review not found', 404);
    }

    res.status(200).json({
      success: true,
      message: 'Review updated successfully',
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete review
// @route   DELETE /api/reviews/:id
// @access  Private (Admin)
export const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      throw new AppError('Review not found', 404);
    }

    res.status(200).json({
      success: true,
      message: 'Review deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Mark review as helpful
// @route   PATCH /api/reviews/:id/helpful
// @access  Public
export const markReviewHelpful = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      throw new AppError('Review not found', 404);
    }

    // Increment helpful count
    review.helpful = (review.helpful || 0) + 1;
    await review.save();

    res.status(200).json({
      success: true,
      message: 'Thank you for your feedback!',
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Approve review
// @route   PATCH /api/reviews/:id/approve
// @access  Private (Admin)
export const approveReview = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );

    if (!review) {
      throw new AppError('Review not found', 404);
    }

    res.status(200).json({
      success: true,
      message: 'Review approved successfully',
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

// Made with Bob
