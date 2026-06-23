import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  published: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [10, 'Title must be at least 10 characters'],
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'],
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      trim: true,
      minlength: [50, 'Excerpt must be at least 50 characters'],
      maxlength: [300, 'Excerpt cannot exceed 300 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      minlength: [100, 'Content must be at least 100 characters'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
      default: 'Dr. Priya Sharma',
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'Skin Care',
        'Anti-Aging',
        'Body Treatments',
        'Hair Care',
        'Wellness',
        'Beauty Tips',
        'Treatment Updates',
      ],
    },
    tags: {
      type: [String],
      default: [],
      validate: {
        validator: function (tags: string[]) {
          return tags.length <= 10;
        },
        message: 'Cannot have more than 10 tags',
      },
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    published: {
      type: Boolean,
      default: false,
    },
    views: {
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
blogSchema.index({ slug: 1 });
blogSchema.index({ category: 1 });
blogSchema.index({ published: 1, createdAt: -1 });
blogSchema.index({ featured: 1 });
blogSchema.index({ tags: 1 });

// Virtual for reading time (assuming 200 words per minute)
blogSchema.virtual('readingTime').get(function () {
  const wordsPerMinute = 200;
  const wordCount = this.content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
});

// Method to increment views
blogSchema.methods.incrementViews = async function () {
  this.views += 1;
  return this.save();
};

export default mongoose.model<IBlog>('Blog', blogSchema);

// Made with Bob
