import mongoose, { Document, Schema } from 'mongoose';

export interface IAppointment extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
  time: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

const appointmentSchema = new Schema<IAppointment>(
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
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number'],
    },
    service: {
      type: String,
      required: [true, 'Service is required'],
      enum: [
        'Skin Rejuvenation',
        'Anti-Aging Treatments',
        'Body Contouring',
        'Hair Restoration',
        'Laser Treatments',
        'Cosmetic Injectables',
      ],
    },
    date: {
      type: Date,
      required: [true, 'Appointment date is required'],
      validate: {
        validator: function (value: Date) {
          return value > new Date();
        },
        message: 'Appointment date must be in the future',
      },
    },
    time: {
      type: String,
      required: [true, 'Appointment time is required'],
      match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please provide a valid time (HH:MM)'],
    },
    message: {
      type: String,
      trim: true,
      maxlength: [500, 'Message cannot exceed 500 characters'],
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
appointmentSchema.index({ email: 1, date: 1 });
appointmentSchema.index({ status: 1 });

// Virtual for formatted date
appointmentSchema.virtual('formattedDate').get(function () {
  return this.date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

export default mongoose.model<IAppointment>('Appointment', appointmentSchema);

// Made with Bob
