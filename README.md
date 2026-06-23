# Elegant Glow Aesthetic Clinic - Full Stack Application

A premium, full-featured website for Elegant Glow Aesthetic Clinic with complete backend API, admin panel capabilities, and modern design.

## 🌟 Features

### Frontend
- ✅ 13 Complete Pages (Home, About, Doctors, Services, Gallery, Blog, Contact, etc.)
- ✅ Premium Design with Gold Theme
- ✅ Responsive Mobile-First Design
- ✅ Smooth Animations (Framer Motion)
- ✅ Before/After Image Comparison Slider
- ✅ Form Validation (React Hook Form + Zod)
- ✅ WhatsApp Integration
- ✅ SEO Optimized

### Backend
- ✅ RESTful API with Express + TypeScript
- ✅ MongoDB Database with Mongoose
- ✅ JWT Authentication
- ✅ Email Notifications (Nodemailer)
- ✅ Error Handling & Validation
- ✅ Security (Helmet, CORS, Rate Limiting)
- ✅ 7 Complete API Endpoints

### DevOps
- ✅ Docker & Docker Compose
- ✅ Production-Ready Configuration
- ✅ Nginx Reverse Proxy
- ✅ Environment-Based Configuration

## 📋 Prerequisites

- Node.js 18+ and npm
- MongoDB (local or Atlas)
- Docker & Docker Compose (for containerized deployment)
- Git

## 🚀 Quick Start

### Option 1: Local Development

#### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd "Elegant Glow Aesthetic Clinic_Latest"
```

#### 2. Setup Frontend
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Frontend will run on http://localhost:5173

#### 3. Setup Backend
```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your configuration
# Required: MONGODB_URI, EMAIL_USER, EMAIL_PASS, JWT_SECRET

# Start development server
npm run dev
```
Backend will run on http://localhost:5000

### Option 2: Docker Deployment

#### 1. Configure Environment
```bash
# Create .env file in root directory
cp backend/.env.example .env

# Edit .env with your configuration
```

#### 2. Build and Run with Docker Compose
```bash
docker-compose up -d
```

Services will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

#### 3. Stop Services
```bash
docker-compose down
```

## 📁 Project Structure

```
Elegant Glow Aesthetic Clinic_Latest/
├── src/                          # Frontend source code
│   ├── pages/                    # 13 page components
│   ├── components/               # Reusable components
│   ├── routes/                   # React Router configuration
│   ├── assets/                   # Images, data, styles
│   └── lib/                      # Utilities and validation
├── backend/                      # Backend source code
│   ├── src/
│   │   ├── models/              # Mongoose models (7 models)
│   │   ├── controllers/         # Route controllers (7 controllers)
│   │   ├── routes/              # API routes (7 route files)
│   │   ├── middleware/          # Auth, error handling
│   │   ├── services/            # Email service
│   │   ├── config/              # Database configuration
│   │   └── index.ts             # Main server file
│   ├── package.json
│   ├── tsconfig.json
│   ├── Dockerfile
│   └── .env.example
├── public/                       # Static assets
├── docker-compose.yml           # Docker orchestration
├── Dockerfile                   # Frontend Docker image
├── nginx.conf                   # Nginx configuration
└── README.md                    # This file
```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
# Server
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173

# Database
MONGODB_URI=mongodb://localhost:27017/elegant-glow

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d

# Email (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=sagar007cena@gmail.com
```

### Gmail Setup for Email Service
1. Enable 2-Factor Authentication in your Google Account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `EMAIL_PASS`

## 📡 API Endpoints

### Public Endpoints
- `POST /api/appointments` - Create appointment
- `POST /api/contact` - Send contact message
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:slug` - Get blog by slug
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:slug` - Get doctor by slug
- `GET /api/gallery` - Get gallery items
- `GET /api/reviews` - Get reviews
- `POST /api/reviews` - Submit review

### Protected Endpoints (Admin)
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `GET /api/appointments` - Get all appointments
- `PUT /api/appointments/:id` - Update appointment
- `PATCH /api/appointments/:id/status` - Update status
- `GET /api/contact` - Get all messages
- `POST /api/blogs` - Create blog post
- `PUT /api/blogs/:id` - Update blog post
- `DELETE /api/blogs/:id` - Delete blog post
- And more...

## 🗄️ Database Models

1. **Appointment** - Appointment bookings
2. **Contact** - Contact form submissions
3. **Blog** - Blog posts
4. **Doctor** - Doctor profiles
5. **Gallery** - Before/after images
6. **Review** - Customer reviews
7. **User** - Admin/staff users

## 🎨 Frontend Pages

1. **Home** - Hero, services, testimonials
2. **About** - Clinic story, mission, values
3. **Doctors** - Team profiles
4. **Services** - Service categories
5. **Service Detail** - Individual service pages
6. **Gallery** - Before/after comparisons
7. **Blog** - Blog listing
8. **Blog Post** - Individual articles
9. **Contact** - Contact form
10. **Appointment** - Booking form
11. **Offers** - Special deals
12. **Testimonials** - Customer reviews
13. **404** - Not found page

## 🔐 Default Admin Credentials

**Important:** Create admin user via API after setup:

```bash
POST /api/auth/register
{
  "name": "Admin User",
  "email": "admin@elegantglow.com",
  "password": "SecurePassword123!",
  "role": "admin"
}
```

Note: This endpoint requires authentication. For first admin, temporarily remove auth middleware or use MongoDB directly.

## 📦 Build for Production

### Frontend
```bash
npm run build
```
Output: `dist/` directory

### Backend
```bash
cd backend
npm run build
```
Output: `backend/dist/` directory

## 🐳 Docker Commands

```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Remove volumes (caution: deletes data)
docker-compose down -v
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Backend Deployment (Render/Railway/Heroku)
1. Connect your Git repository
2. Set root directory: `backend`
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy

### Full Stack Deployment (Docker)
1. Push code to server
2. Configure environment variables
3. Run `docker-compose up -d`

## 📞 Contact Information

**Elegant Glow Aesthetic Clinic**
- Address: New Road Phusro, Near Vishal Mega Mart, Bokaro
- Phone: +91 7488172473
- Email: sagar007cena@gmail.com

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- React Router v6
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- React Compare Slider

### Backend
- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Nodemailer
- Helmet
- CORS

### DevOps
- Docker
- Docker Compose
- Nginx

## 📝 License

Private - All rights reserved to Elegant Glow Aesthetic Clinic

## 🤝 Support

For support, email sagar007cena@gmail.com or call +91 7488172473

---

**Built with ❤️ for Elegant Glow Aesthetic Clinic**