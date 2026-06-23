@echo off
REM Build Docker Images Script for Elegant Glow Aesthetic Clinic (Windows)
REM This script builds all Docker images for the application

echo.
echo ========================================
echo Building Docker Images
echo Elegant Glow Aesthetic Clinic
echo ========================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker is not installed or not in PATH
    echo Please install Docker Desktop for Windows
    pause
    exit /b 1
)

REM Check if docker-compose is installed
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker Compose is not installed
    echo Please install Docker Compose
    pause
    exit /b 1
)

echo Step 1: Checking environment configuration...
if not exist ".env" (
    echo WARNING: .env file not found
    echo Copying from backend\.env.example
    copy backend\.env.example .env
    echo Created .env file. Please configure it with your settings.
)
echo.

echo Step 2: Building Frontend Docker Image...
docker build -t elegant-glow-frontend:latest -f Dockerfile .
if errorlevel 1 (
    echo ERROR: Frontend image build failed
    pause
    exit /b 1
)
echo Frontend image built successfully
echo.

echo Step 3: Building Backend Docker Image...
docker build -t elegant-glow-backend:latest -f backend\Dockerfile .\backend
if errorlevel 1 (
    echo ERROR: Backend image build failed
    pause
    exit /b 1
)
echo Backend image built successfully
echo.

echo Step 4: Pulling MongoDB Image...
docker pull mongo:7.0
if errorlevel 1 (
    echo ERROR: MongoDB image pull failed
    pause
    exit /b 1
)
echo MongoDB image pulled successfully
echo.

echo Step 5: Building all services with docker-compose...
docker-compose build
if errorlevel 1 (
    echo ERROR: Docker compose build failed
    pause
    exit /b 1
)
echo All services built successfully
echo.

echo ========================================
echo SUCCESS: All Docker images built!
echo ========================================
echo.
echo Built Images:
docker images | findstr elegant-glow
echo.
echo Next Steps:
echo 1. Configure your .env file with production settings
echo 2. Start services: docker-compose up -d
echo 3. Check logs: docker-compose logs -f
echo 4. Access application:
echo    - Frontend: http://localhost:3000
echo    - Backend: http://localhost:5000
echo    - MongoDB: localhost:27017
echo.
echo Useful Commands:
echo    - Stop services: docker-compose down
echo    - View logs: docker-compose logs -f [service-name]
echo    - Restart service: docker-compose restart [service-name]
echo    - Remove volumes: docker-compose down -v
echo.
pause

@REM Made with Bob
