# Quick Docker Rebuild Instructions

## Image Name: `elegant-glow-clinic`

Your existing Docker image will be rebuilt with all the new code (Admin Panel, Google Reviews, Instagram Feed, AI Consultation).

## 🚀 Quick Rebuild Commands

Open PowerShell or Command Prompt and run:

```powershell
# Navigate to project directory
cd "C:\Users\NIRANJANKumar\Downloads\Java\Elegant Glow Aesthetic Clinic_Latest"

# Stop existing containers
docker-compose down

# Rebuild images with no cache (forces fresh build with new code)
docker-compose build --no-cache

# Start services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

## 📋 What This Does

1. **Stops** all running containers
2. **Rebuilds** both images:
   - `elegant-glow-clinic:frontend` - with all 16 pages including new features
   - `elegant-glow-clinic:backend` - with all API endpoints
3. **Starts** all services (frontend, backend, MongoDB)

## ✅ Verify New Features

After rebuild, test these URLs:

- **Homepage:** http://localhost:4000
- **Admin Login:** http://localhost:4000/admin/login
- **Admin Dashboard:** http://localhost:4000/admin/dashboard
- **AI Consultation:** http://localhost:4000/ai-consultation
- **Backend Health:** http://localhost:5000/health

## 🔐 Admin Credentials

- **Email:** admin@elegantglow.com
- **Password:** Admin123!

## 📦 New Features Included

✅ Admin Login Page  
✅ Admin Dashboard with Statistics  
✅ Google Reviews Component  
✅ Instagram Feed Component  
✅ AI Consultation (4-step wizard)  
✅ Image Upload for Skin Analysis  
✅ Protected Admin Routes  

## 🐛 Troubleshooting

**If old code still appears:**
```powershell
# Hard refresh browser
Ctrl + Shift + R

# Or clear browser cache and retry
```

**If build fails:**
```powershell
# Clean Docker cache
docker builder prune -a

# Retry build
docker-compose build --no-cache
```

**Check logs if issues:**
```powershell
docker-compose logs backend
docker-compose logs frontend
```

## 📊 Image Details

After successful build, verify images:

```powershell
docker images | findstr elegant-glow-clinic
```

You should see:
```
elegant-glow-clinic   frontend   ...
elegant-glow-clinic   backend    ...
```

---

**Ready to rebuild?** Just run:
```powershell
cd "C:\Users\NIRANJANKumar\Downloads\Java\Elegant Glow Aesthetic Clinic_Latest"
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

That's it! Your Docker images will be rebuilt with all the new code. 🎉