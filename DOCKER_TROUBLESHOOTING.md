# Docker Build Troubleshooting Guide

## Current Issue

**Error**: `No connection could be made because the target machine actively refused it`

**Root Cause**: Docker cannot connect to Docker Hub (auth.docker.io) to pull base images.

---

## Solutions (Try in Order)

### Solution 1: Restart Docker Desktop

1. **Open Docker Desktop**
2. **Click the Docker icon** in system tray (bottom-right)
3. **Select "Quit Docker Desktop"**
4. **Wait 10 seconds**
5. **Start Docker Desktop again**
6. **Wait for Docker to fully start** (whale icon should be steady, not animated)
7. **Try building again**:
   ```powershell
   cd "C:\Users\NIRANJANKumar\Downloads\Java\Elegant Glow Aesthetic Clinic_Latest"
   docker-compose build --no-cache
   ```

### Solution 2: Check Docker Desktop Settings

1. **Open Docker Desktop**
2. **Go to Settings** (gear icon)
3. **Navigate to "Resources" → "Network"**
4. **Ensure "Enable network proxy" is OFF** (unless you use a proxy)
5. **Click "Apply & Restart"**
6. **Try building again**

### Solution 3: Check Internet Connection

1. **Test Docker Hub connectivity**:
   ```powershell
   Test-NetConnection -ComputerName auth.docker.io -Port 443
   ```
   
2. **If connection fails**:
   - Check your internet connection
   - Check if firewall is blocking Docker
   - Check if antivirus is blocking Docker

### Solution 4: Use Cached Images (If Available)

If you have the images already pulled, you can build without pulling:

```powershell
cd "C:\Users\NIRANJANKumar\Downloads\Java\Elegant Glow Aesthetic Clinic_Latest"

# Check if images exist
docker images | findstr "node"
docker images | findstr "nginx"

# If images exist, build without --no-cache
docker-compose build
```

### Solution 5: Pull Base Images Manually

Try pulling the base images separately:

```powershell
# Pull Node.js image
docker pull node:18-alpine

# Pull Nginx image  
docker pull nginx:alpine

# Pull MongoDB image
docker pull mongo:7.0

# Then build
docker-compose build --no-cache
```

### Solution 6: Check Docker Daemon

```powershell
# Check Docker status
docker info

# If error, restart Docker service
Restart-Service docker
```

---

## Quick Fix Commands

### Option A: Restart Everything

```powershell
# Stop Docker Desktop completely
# Then start it again from Start Menu

# Wait 30 seconds, then:
cd "C:\Users\NIRANJANKumar\Downloads\Java\Elegant Glow Aesthetic Clinic_Latest"
docker-compose build --no-cache
```

### Option B: Build Without Cache Clean

```powershell
cd "C:\Users\NIRANJANKumar\Downloads\Java\Elegant Glow Aesthetic Clinic_Latest"

# Build using existing cache (faster)
docker-compose build

# If successful, start containers
docker-compose up -d
```

---

## After Successful Build

Once the build completes successfully:

```powershell
# Start all containers
docker-compose up -d

# Check container status
docker-compose ps

# View logs
docker-compose logs -f

# Access application
# Frontend: http://localhost:4000
# Backend: http://localhost:5001
```

---

## Common Issues & Solutions

### Issue: "Image not found"
**Solution**: Pull the image manually first
```powershell
docker pull node:18-alpine
docker pull nginx:alpine
docker pull mongo:7.0
```

### Issue: "Port already in use"
**Solution**: Stop conflicting containers
```powershell
docker-compose down
docker ps -a
docker stop <container_id>
```

### Issue: "Out of disk space"
**Solution**: Clean Docker
```powershell
docker system prune -a --volumes
```

### Issue: "Build timeout"
**Solution**: Increase Docker resources
- Open Docker Desktop → Settings → Resources
- Increase CPU and Memory
- Apply & Restart

---

## Network Diagnostics

### Test Docker Hub Connection

```powershell
# Test DNS resolution
nslookup auth.docker.io

# Test connectivity
Test-NetConnection -ComputerName auth.docker.io -Port 443

# Test with curl
curl https://auth.docker.io
```

### Check Firewall

```powershell
# Check if Windows Firewall is blocking
Get-NetFirewallRule | Where-Object {$_.DisplayName -like "*Docker*"}
```

---

## Alternative: Use Pre-built Images

If Docker Hub connection continues to fail, you can:

1. **Use a VPN** to access Docker Hub
2. **Use a mirror registry** (if available in your region)
3. **Build on a different machine** and export/import images

---

## Contact Information

If issues persist:
1. Check Docker Desktop logs: Settings → Troubleshoot → View logs
2. Check Windows Event Viewer for Docker errors
3. Restart your computer (sometimes helps with network issues)

---

**Last Updated**: 2026-06-23
**Status**: Awaiting Docker Hub connection resolution