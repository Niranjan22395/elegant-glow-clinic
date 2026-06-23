import { Request, Response, NextFunction } from 'express';
import Gallery from '../models/Gallery';
import { AppError } from '../middleware/errorHandler';

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
export const getGalleryItems = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { category, featured, published = 'true' } = req.query;

    // Build query
    const query: any = { published: published === 'true' };
    if (category) query.category = category;
    if (featured) query.featured = featured === 'true';

    const items = await Gallery.find(query).sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single gallery item
// @route   GET /api/gallery/:id
// @access  Public
export const getGalleryItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const item = await Gallery.findById(req.params.id);

    if (!item) {
      throw new AppError('Gallery item not found', 404);
    }

    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create gallery item
// @route   POST /api/gallery
// @access  Private (Admin)
export const createGalleryItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const item = await Gallery.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Gallery item created successfully',
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update gallery item
// @route   PUT /api/gallery/:id
// @access  Private (Admin)
export const updateGalleryItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const item = await Gallery.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      throw new AppError('Gallery item not found', 404);
    }

    res.status(200).json({
      success: true,
      message: 'Gallery item updated successfully',
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete gallery item
// @route   DELETE /api/gallery/:id
// @access  Private (Admin)
export const deleteGalleryItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const item = await Gallery.findByIdAndDelete(req.params.id);

    if (!item) {
      throw new AppError('Gallery item not found', 404);
    }

    res.status(200).json({
      success: true,
      message: 'Gallery item deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// Made with Bob
