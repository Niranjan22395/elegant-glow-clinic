import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  name: string;
  email: string;
  rating: number;
  title: string;
  comment: string;
  treatment: string;
  verified: boolean;
  approved: boolean;
  featured: boolean;
  helpful: number;
  createdAt: Date;
  updatedAt: Date;
}

const reviewSchema = new Schema<IReview>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5'],
    },
    title: {
      type: String,
      required: [true, 'Review title is required'],
      trim: true,
      minlength: [5, 'Title must be at least 5 characters'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
      trim: true,
      minlength: [20, 'Comment must be at least 20 characters'],
      maxlength: [1000, 'Comment cannot exceed 1000 characters'],
    },
    treatment: {
      type: String,
      required: [true, 'Treatment is required'],
      enum: [
        'Skin Rejuvenation',
        'Anti-Aging Treatments',
        'Body Contouring',
        'Hair Restoration',
        'Laser Treatments',
        'Cosmetic Injectables',
        'General Consultation',
      ],
    },
    verified: {
      type: Boolean,
      default: false,
      comment: 'Verified purchase/treatment',
    },
    approved: {
      type: Boolean,
      default: false,
      comment: 'Admin approved for display',
    },
    featured: {
      type: Boolean,
      default: false,
      comment: 'Featured on homepage',
    },
    helpful: {
      type: Number,
      default: 0,
      min: 0,
      comment: 'Number of helpful votes',
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
reviewSchema.index({ approved: 1, createdAt: -1 });
reviewSchema.index({ featured: 1, approved: 1 });
reviewSchema.index({ rating: -1 });
reviewSchema.index({ treatment: 1 });

// Method to mark as helpful
reviewSchema.methods.markHelpful = async function () {
  this.helpful += 1;
  return this.save();
};

export default mongoose.model<IReview>('Review', reviewSchema);

// Made with Bob
