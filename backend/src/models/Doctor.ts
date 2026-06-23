import mongoose, { Document, Schema } from 'mongoose';

export interface IDoctor extends Document {
  name: string;
  slug: string;
  title: string;
  specialization: string[];
  qualifications: string[];
  experience: number;
  bio: string;
  image: string;
  email: string;
  phone: string;
  availability: {
    day: string;
    hours: string;
  }[];
  featured: boolean;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const doctorSchema = new Schema<IDoctor>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [3, 'Name must be at least 3 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'],
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      enum: ['Dr.', 'Prof.', 'Mr.', 'Ms.', 'Mrs.'],
      default: 'Dr.',
    },
    specialization: {
      type: [String],
      required: [true, 'At least one specialization is required'],
      validate: {
        validator: function (specs: string[]) {
          return specs.length > 0 && specs.length <= 5;
        },
        message: 'Must have between 1 and 5 specializations',
      },
    },
    qualifications: {
      type: [String],
      required: [true, 'At least one qualification is required'],
      validate: {
        validator: function (quals: string[]) {
          return quals.length > 0 && quals.length <= 10;
        },
        message: 'Must have between 1 and 10 qualifications',
      },
    },
    experience: {
      type: Number,
      required: [true, 'Experience is required'],
      min: [0, 'Experience cannot be negative'],
      max: [60, 'Experience cannot exceed 60 years'],
    },
    bio: {
      type: String,
      required: [true, 'Bio is required'],
      trim: true,
      minlength: [50, 'Bio must be at least 50 characters'],
      maxlength: [2000, 'Bio cannot exceed 2000 characters'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number'],
    },
    availability: [
      {
        day: {
          type: String,
          required: true,
          enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        hours: {
          type: String,
          required: true,
          match: [/^[0-9]{1,2}:[0-9]{2}\s?(AM|PM)\s?-\s?[0-9]{1,2}:[0-9]{2}\s?(AM|PM)$/i, 'Invalid time format'],
        },
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
doctorSchema.index({ slug: 1 });
doctorSchema.index({ featured: 1, active: 1 });
doctorSchema.index({ specialization: 1 });

// Virtual for full name with title
doctorSchema.virtual('fullName').get(function () {
  return `${this.title} ${this.name}`;
});

export default mongoose.model<IDoctor>('Doctor', doctorSchema);

// Made with Bob
