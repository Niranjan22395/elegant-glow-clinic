# Clean and Rebuild Docker Images - PowerShell Script
# This script will completely clean Docker and rebuild all images from scratch

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Elegant Glow Clinic - Clean Rebuild  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Stop and remove all containers
Write-Host "[1/7] Stopping all containers..." -ForegroundColor Yellow
docker-compose down
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Containers stopped successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to stop containers" -ForegroundColor Red
}
Write-Host ""

# Step 2: Remove all project images
Write-Host "[2/7] Removing old images..." -ForegroundColor Yellow
docker rmi elegant-glow-clinic:frontend -f 2>$null
docker rmi elegant-glow-clinic:backend -f 2>$null
Write-Host "✓ Old images removed" -ForegroundColor Green
Write-Host ""

# Step 3: Clean Docker build cache
Write-Host "[3/7] Cleaning Docker build cache..." -ForegroundColor Yellow
docker builder prune -f
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Build cache cleaned" -ForegroundColor Green
} else {
    Write-Host "! Build cache clean had issues (non-critical)" -ForegroundColor Yellow
}
Write-Host ""

# Step 4: Remove dangling images
Write-Host "[4/7] Removing dangling images..." -ForegroundColor Yellow
docker image prune -f
Write-Host "✓ Dangling images removed" -ForegroundColor Green
Write-Host ""

# Step 5: Build backend image
Write-Host "[5/7] Building backend image..." -ForegroundColor Yellow
Write-Host "This may take 2-3 minutes..." -ForegroundColor Gray
docker-compose build backend --no-cache
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Backend image built successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Backend build failed!" -ForegroundColor Red
    Write-Host "Check the error messages above" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 6: Build frontend image
Write-Host "[6/7] Building frontend image..." -ForegroundColor Yellow
Write-Host "This may take 3-5 minutes..." -ForegroundColor Gray
docker-compose build frontend --no-cache
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Frontend image built successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Frontend build failed!" -ForegroundColor Red
    Write-Host "Check the error messages above" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 7: Start all containers
Write-Host "[7/7] Starting all containers..." -ForegroundColor Yellow
docker-compose up -d
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ All containers started successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to start containers" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Show container status
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Container Status" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
docker-compose ps
Write-Host ""

# Show logs
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Recent Logs" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Showing last 20 lines of logs..." -ForegroundColor Gray
docker-compose logs --tail=20
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ✓ Rebuild Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Access your application at:" -ForegroundColor Cyan
Write-Host "  Frontend: http://localhost:4000" -ForegroundColor White
Write-Host "  Backend:  http://localhost:5001" -ForegroundColor White
Write-Host "  MongoDB:  localhost:27017" -ForegroundColor White
Write-Host ""
Write-Host "To view live logs, run:" -ForegroundColor Cyan
Write-Host "  docker-compose logs -f" -ForegroundColor White
Write-Host ""

# Made with Bob
