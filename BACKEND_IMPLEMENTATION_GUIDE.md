# 🚀 Phase 2: Backend API Implementation Guide

## 📋 Overview

This guide provides complete instructions for building the backend API for Elegant Glow Clinic.

**Technology Stack:**
- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- Nodemailer for emails

---

## 📁 Complete Backend File Structure

```
backend/
├── package.json                 ✅ Created
├── tsconfig.json               ✅ Created
├── .env.example                ⏳ To create
├── .gitignore                  ⏳ To create
├── Dockerfile                  ⏳ To create
├── docker-compose.yml          ⏳ To create
├── README.md                   ⏳ To create
│
├── src/
│   ├── index.ts                ⏳ Main server file
│   ├── app.ts                  ⏳ Express app configuration
│   │
│   ├── config/
│   │   ├── database.ts         ⏳ MongoDB connection
│   │   ├── email.ts            ⏳ Email configuration
│   │   └── constants.ts        ⏳ App constants
│   │
│   ├── models/
│   │   ├── Appointment.ts      ⏳ Appointment schema
│   │   ├── Contact.ts          ⏳ Contact form schema
│   │   ├── Blog.ts             ⏳ Blog post schema
│   │   ├── Doctor.ts           ⏳ Doctor schema
│   │   ├── Gallery.ts          ⏳ Gallery item schema
│   │   ├── Review.ts           ⏳ Review schema
│   │   └── User.ts             ⏳ Admin user schema
│   │
│   ├── routes/
│   │   ├── index.ts            ⏳ Route aggregator
│   │   ├── appointments.ts     ⏳ Appointment routes
│   │   ├── contact.ts          ⏳ Contact routes
│   │   ├── blogs.ts            ⏳ Blog routes
│   │   ├── doctors.ts          ⏳ Doctor routes
│   │   ├── gallery.ts          ⏳ Gallery routes
│   │   ├── reviews.ts          ⏳ Review routes
│   │   └── auth.ts             ⏳ Authentication routes
│   │
│   ├── controllers/
│   │   ├── appointmentController.ts
│   │   ├── contactController.ts
│   │   ├── blogController.ts
│   │   ├── doctorController.ts
│   │   ├── galleryController.ts
│   │   ├── reviewController.ts
│   │   └── authController.ts
│   │
│   ├── middleware/
│   │   ├── auth.ts             ⏳ JWT authentication
│   │   ├── validation.ts       ⏳ Request validation
│   │   ├── errorHandler.ts     ⏳ Error handling
│   │   └── upload.ts           ⏳ File upload (multer)
│   │
│   ├── services/
│   │   ├── emailService.ts     ⏳ Email sending
│   │   ├── smsService.ts       ⏳ SMS notifications (optional)
│   │   └── uploadService.ts    ⏳ File upload handling
│   │
│   ├── utils/
│   │   ├── logger.ts           ⏳ Logging utility
│   │   ├── validators.ts       ⏳ Zod schemas
│   │   └── helpers.ts          ⏳ Helper functions
│   │
│   └── types/
│       └── index.ts            ⏳ TypeScript types
│
└── uploads/                    ⏳ Uploaded files directory
```

---

## 🔧 Step-by-Step Implementation

### Step 1: Environment Setup

Create `.env` file:
```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/elegant-glow
# Or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/elegant-glow

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# Email (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=sagar007cena@gmail.com
EMAIL_PASS=your-app-specific-password
EMAIL_FROM=Elegant Glow Clinic <sagar007cena@gmail.com>

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Admin
ADMIN_EMAIL=admin@elegantglow.com
ADMIN_PASSWORD=Admin@123

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_DIR=./uploads
```

### Step 2: Main Server File

**src/index.ts:**
```typescript
import app from './app';
import { connectDatabase } from './config/database';

const PORT = process.env.PORT || 5000;

// Connect to database
connectDatabase();

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV}`);
});
```

### Step 3: Express App Configuration

**src/app.ts:**
```typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Static files
app.use('/uploads', express.static('uploads'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

export default app;
```

### Step 4: Database Configuration

**src/config/database.ts:**
```typescript
import mongoose from 'mongoose';

export const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI!);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};
```

### Step 5: Models

**src/models/Appointment.ts:**
```typescript
import mongoose, { Schema, Document } from 'mongoose';

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

const AppointmentSchema = new Schema<IAppointment>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  message: { type: String },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  }
}, {
  timestamps: true
});

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
```

**src/models/Contact.ts:**
```typescript
import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: {
    type: String,
    enum: ['new', 'read', 'replied'],
    default: 'new'
  }
}, {
  timestamps: true
});

export default mongoose.model<IContact>('Contact', ContactSchema);
```

**src/models/Blog.ts:**
```typescript
import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  tags: [{ type: String }],
  published: { type: Boolean, default: false }
}, {
  timestamps: true
});

export default mongoose.model<IBlog>('Blog', BlogSchema);
```

### Step 6: Controllers

**src/controllers/appointmentController.ts:**
```typescript
import { Request, Response } from 'express';
import Appointment from '../models/Appointment';
import { sendAppointmentEmail } from '../services/emailService';

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await Appointment.create(req.body);
    
    // Send confirmation email
    await sendAppointmentEmail(appointment);
    
    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      data: appointment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error booking appointment',
      error: error.message
    });
  }
};

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const { status, date } = req.query;
    const filter: any = {};
    
    if (status) filter.status = status;
    if (date) filter.date = new Date(date as string);
    
    const appointments = await Appointment.find(filter).sort({ date: -1 });
    
    res.json({
      success: true,
      count: appointments.length,
      data: appointments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching appointments',
      error: error.message
    });
  }
};

export const updateAppointmentStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Appointment updated successfully',
      data: appointment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating appointment',
      error: error.message
    });
  }
};
```

### Step 7: Routes

**src/routes/appointments.ts:**
```typescript
import express from 'express';
import {
  createAppointment,
  getAppointments,
  updateAppointmentStatus
} from '../controllers/appointmentController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/', createAppointment);

// Protected routes (admin only)
router.get('/', authenticate, getAppointments);
router.patch('/:id/status', authenticate, updateAppointmentStatus);

export default router;
```

**src/routes/index.ts:**
```typescript
import express from 'express';
import appointmentRoutes from './appointments';
import contactRoutes from './contact';
import blogRoutes from './blogs';
import doctorRoutes from './doctors';
import galleryRoutes from './gallery';
import reviewRoutes from './reviews';
import authRoutes from './auth';

const router = express.Router();

router.use('/appointments', appointmentRoutes);
router.use('/contact', contactRoutes);
router.use('/blogs', blogRoutes);
router.use('/doctors', doctorRoutes);
router.use('/gallery', galleryRoutes);
router.use('/reviews', reviewRoutes);
router.use('/auth', authRoutes);

export default router;
```

### Step 8: Email Service

**src/services/emailService.ts:**
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT!),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendAppointmentEmail = async (appointment: any) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: appointment.email,
    subject: 'Appointment Confirmation - Elegant Glow Clinic',
    html: `
      <h1>Appointment Confirmed!</h1>
      <p>Dear ${appointment.name},</p>
      <p>Your appointment has been booked successfully.</p>
      <h3>Details:</h3>
      <ul>
        <li><strong>Service:</strong> ${appointment.service}</li>
        <li><strong>Date:</strong> ${new Date(appointment.date).toLocaleDateString()}</li>
        <li><strong>Time:</strong> ${appointment.time}</li>
      </ul>
      <p>We will contact you shortly to confirm.</p>
      <p>Best regards,<br>Elegant Glow Clinic</p>
    `
  };
  
  await transporter.sendMail(mailOptions);
  
  // Also send notification to clinic
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_USER,
    subject: 'New Appointment Booking',
    html: `
      <h2>New Appointment Received</h2>
      <p><strong>Name:</strong> ${appointment.name}</p>
      <p><strong>Phone:</strong> ${appointment.phone}</p>
      <p><strong>Service:</strong> ${appointment.service}</p>
      <p><strong>Date:</strong> ${new Date(appointment.date).toLocaleDateString()}</p>
      <p><strong>Time:</strong> ${appointment.time}</p>
    `
  });
};
```

---

## 🐳 Docker Configuration

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/elegant-glow
    depends_on:
      - mongo
    volumes:
      - ./backend/uploads:/app/uploads

  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

  frontend:
    build: .
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  mongo-data:
```

---

## 🚀 Running the Backend

### Development:
```bash
cd backend
npm install
npm run dev
```

### Production:
```bash
npm run build
npm start
```

### With Docker:
```bash
docker-compose up -d
```

---

## 📝 API Endpoints

### Appointments
- `POST /api/appointments` - Create appointment
- `GET /api/appointments` - List appointments (admin)
- `PATCH /api/appointments/:id/status` - Update status (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - List messages (admin)

### Blogs
- `GET /api/blogs` - List all blogs
- `GET /api/blogs/:slug` - Get single blog
- `POST /api/blogs` - Create blog (admin)
- `PUT /api/blogs/:id` - Update blog (admin)
- `DELETE /api/blogs/:id` - Delete blog (admin)

### Doctors
- `GET /api/doctors` - List doctors
- `POST /api/doctors` - Add doctor (admin)
- `PUT /api/doctors/:id` - Update doctor (admin)
- `DELETE /api/doctors/:id` - Delete doctor (admin)

### Gallery
- `GET /api/gallery` - List gallery items
- `POST /api/gallery` - Upload image (admin)
- `DELETE /api/gallery/:id` - Delete image (admin)

### Reviews
- `GET /api/reviews` - List reviews
- `POST /api/reviews` - Submit review
- `PATCH /api/reviews/:id/approve` - Approve review (admin)

### Auth
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Register admin (first time only)
- `GET /api/auth/me` - Get current user

---

## ⚙️ Environment Variables

All required environment variables are documented in `.env.example`.

**Critical Settings:**
- Change `JWT_SECRET` in production
- Use MongoDB Atlas for production database
- Configure email service (Gmail, SendGrid, etc.)
- Set proper CORS origins

---

## 🔒 Security Checklist

- ✅ Helmet for security headers
- ✅ CORS configuration
- ✅ Rate limiting
- ✅ JWT authentication
- ✅ Password hashing (bcrypt)
- ✅ Input validation (Zod)
- ✅ Error handling
- ✅ Environment variables

---

## 📊 Database Schema

All models are defined with TypeScript interfaces and Mongoose schemas.

**Collections:**
- appointments
- contacts
- blogs
- doctors
- gallery
- reviews
- users (admin)

---

## 🎯 Next Steps

1. **Install Dependencies**: `cd backend && npm install`
2. **Set up MongoDB**: Local or MongoDB Atlas
3. **Configure Environment**: Copy `.env.example` to `.env`
4. **Run Development Server**: `npm run dev`
5. **Test API**: Use Postman or Thunder Client
6. **Build Frontend Integration**: Update API calls in frontend

---

**Status**: Backend structure defined, ready for implementation
**Estimated Time**: 2-3 days for complete backend
**Complexity**: Medium - Standard REST API with authentication