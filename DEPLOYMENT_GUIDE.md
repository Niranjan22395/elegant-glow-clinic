# Deployment Guide - Elegant Glow Aesthetic Clinic

Complete guide for deploying the application to production.

## 📋 Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] MongoDB database set up (local or Atlas)
- [ ] Email service configured (Gmail or SMTP)
- [ ] Domain name purchased (optional)
- [ ] SSL certificate ready (for HTTPS)
- [ ] Git repository created

## 🚀 Deployment Options

### Option 1: Docker Deployment (Recommended)

#### Prerequisites
- Docker and Docker Compose installed
- Server with at least 2GB RAM
- Port 80, 443, 5000, 27017 available

#### Steps

1. **Clone Repository**
```bash
git clone <your-repo-url>
cd "Elegant Glow Aesthetic Clinic_Latest"
```

2. **Configure Environment**
```bash
# Copy example env file
cp backend/.env.example .env

# Edit .env with production values
nano .env
```

Required environment variables:
```env
NODE_ENV=production
MONGODB_URI=mongodb://admin:password@mongodb:27017/elegant-glow?authSource=admin
JWT_SECRET=<generate-strong-secret>
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=sagar007cena@gmail.com
FRONTEND_URL=https://yourdomain.com
```

3. **Build and Start Services**
```bash
# Build images
docker-compose build

# Start services in detached mode
docker-compose up -d

# Check logs
docker-compose logs -f
```

4. **Verify Deployment**
- Frontend: http://your-server-ip:3000
- Backend API: http://your-server-ip:5000/health
- MongoDB: localhost:27017

5. **Create Admin User**
```bash
# Access backend container
docker exec -it elegant-glow-backend sh

# Use MongoDB shell or API to create admin
```

### Option 2: Separate Service Deployment

#### Frontend (Vercel/Netlify)

**Vercel:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Netlify:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

Configuration:
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18

#### Backend (Render/Railway/Heroku)

**Render:**
1. Create new Web Service
2. Connect Git repository
3. Configure:
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
4. Add environment variables
5. Deploy

**Railway:**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
cd backend
railway init

# Add environment variables
railway variables set MONGODB_URI=<your-mongodb-uri>
railway variables set JWT_SECRET=<your-secret>
# ... add all variables

# Deploy
railway up
```

**Heroku:**
```bash
# Install Heroku CLI
# Create Heroku app
heroku create elegant-glow-backend

# Add MongoDB addon
heroku addons:create mongolab

# Set environment variables
heroku config:set JWT_SECRET=<your-secret>
heroku config:set EMAIL_USER=<your-email>
# ... set all variables

# Deploy
git subtree push --prefix backend heroku main
```

#### Database (MongoDB Atlas)

1. **Create Cluster**
   - Go to https://www.mongodb.com/cloud/atlas
   - Create free cluster
   - Choose region closest to your server

2. **Configure Access**
   - Database Access: Create user with password
   - Network Access: Add IP (0.0.0.0/0 for all, or specific IPs)

3. **Get Connection String**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/elegant-glow?retryWrites=true&w=majority
   ```

4. **Update Environment Variables**
   ```env
   MONGODB_URI=<your-atlas-connection-string>
   ```

## 🔐 Security Configuration

### 1. Environment Variables
Never commit `.env` files. Use platform-specific secret management:
- Vercel: Environment Variables in dashboard
- Render: Environment Variables in settings
- Docker: Use `.env` file (not committed)

### 2. JWT Secret
Generate strong secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 3. CORS Configuration
Update backend CORS to allow only your frontend domain:
```typescript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
```

### 4. Rate Limiting
Already configured in backend. Adjust limits in production if needed.

### 5. HTTPS/SSL
- Use Let's Encrypt for free SSL
- Configure Nginx with SSL certificates
- Redirect HTTP to HTTPS

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-Factor Authentication
2. Generate App Password:
   - Google Account → Security → 2-Step Verification → App passwords
   - Select "Mail" and generate
3. Use generated password in `EMAIL_PASS`

### Alternative SMTP Services
- SendGrid
- Mailgun
- AWS SES
- Postmark

## 🗄️ Database Setup

### Initial Data Seeding

Create a seed script (`backend/src/seed.ts`):
```typescript
import mongoose from 'mongoose';
import User from './models/User';
import Doctor from './models/Doctor';
// ... import other models

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI!);
  
  // Create admin user
  await User.create({
    name: 'Admin',
    email: 'admin@elegantglow.com',
    password: 'ChangeThisPassword123!',
    role: 'admin'
  });
  
  // Create sample doctors
  await Doctor.create([
    {
      name: 'Dr. Priya Sharma',
      slug: 'dr-priya-sharma',
      // ... other fields
    }
  ]);
  
  console.log('✅ Database seeded');
  process.exit(0);
}

seed();
```

Run seed:
```bash
cd backend
npm run seed
```

## 🔍 Monitoring & Logging

### Application Logs
```bash
# Docker logs
docker-compose logs -f backend
docker-compose logs -f frontend

# PM2 (if using)
pm2 logs
```

### Health Checks
- Backend: `GET /health`
- Database: Check MongoDB connection logs

### Monitoring Tools
- **Uptime Monitoring**: UptimeRobot, Pingdom
- **Error Tracking**: Sentry
- **Analytics**: Google Analytics, Plausible

## 🔄 CI/CD Setup

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build frontend
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🧪 Testing Before Deployment

### Frontend Tests
```bash
npm run build
npm run preview
```

### Backend Tests
```bash
cd backend
npm run build
npm start
```

### API Testing
Use Postman or curl:
```bash
# Health check
curl http://localhost:5000/health

# Test appointment creation
curl -X POST http://localhost:5000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"1234567890","service":"Skin Rejuvenation","date":"2024-12-25","time":"10:00"}'
```

## 📊 Performance Optimization

### Frontend
- Enable Gzip compression (Nginx)
- Optimize images (WebP format)
- Lazy load components
- Code splitting

### Backend
- Enable MongoDB indexes (already configured)
- Use Redis for caching (optional)
- Optimize database queries
- Enable compression middleware

### Database
- Create indexes on frequently queried fields
- Use MongoDB Atlas auto-scaling
- Regular backups

## 🔧 Troubleshooting

### Common Issues

**1. MongoDB Connection Failed**
- Check connection string
- Verify network access in MongoDB Atlas
- Check firewall rules

**2. Email Not Sending**
- Verify Gmail app password
- Check SMTP settings
- Review email service logs

**3. CORS Errors**
- Update FRONTEND_URL in backend .env
- Check CORS configuration in backend

**4. Docker Build Fails**
- Clear Docker cache: `docker system prune -a`
- Check Dockerfile syntax
- Verify all files are present

**5. Port Already in Use**
- Change ports in docker-compose.yml
- Kill process using port: `lsof -ti:5000 | xargs kill`

## 📱 Post-Deployment

### 1. Test All Features
- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Forms submit successfully
- [ ] Email notifications working
- [ ] Admin login functional
- [ ] API endpoints responding

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Configure Google Analytics
- [ ] Set up Google My Business
- [ ] Add structured data

### 3. Backup Strategy
- [ ] Set up automated MongoDB backups
- [ ] Configure backup retention policy
- [ ] Test restore procedure

### 4. Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error alerts
- [ ] Monitor server resources

## 🆘 Support

For deployment issues:
- Email: sagar007cena@gmail.com
- Phone: +91 7488172473

## 📚 Additional Resources

- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)

---

**Last Updated:** 2024
**Version:** 1.0.0