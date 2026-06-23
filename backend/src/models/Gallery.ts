import mongoose, { Document, Schema } from 'mongoose';

export interface IGallery extends Document {
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  treatment: string;
  duration: string;
  featured: boolean;
  published: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const gallerySchema = new Schema<IGallery>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [5, 'Title must be at least 5 characters'],
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'Skin Rejuvenation',
        'Anti-Aging',
        'Body Contouring',
        'Hair Restoration',
        'Laser Treatments',
        'Cosmetic Injectables',
      ],
    },
    beforeImage: {
      type: String,
      required: [true, 'Before image is required'],
    },
    afterImage: {
      type: String,
      required: [true, 'After image is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      minlength: [20, 'Description must be at least 20 characters'],
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    treatment: {
      type: String,
      required: [true, 'Treatment name is required'],
      trim: true,
    },
    duration: {
      type: String,
      required: [true, 'Treatment duration is required'],
      trim: true,
      match: [/^[0-9]+\s?(week|weeks|month|months)$/i, 'Invalid duration format (e.g., "4 weeks")'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    published: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
gallerySchema.index({ category: 1, published: 1 });
gallerySchema.index({ featured: 1, published: 1 });
gallerySchema.index({ order: 1 });

export default mongoose.model<IGallery>('Gallery', gallerySchema);

// Made with Bob
