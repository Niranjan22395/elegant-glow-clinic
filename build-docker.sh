#!/bin/bash

# Build Docker Images Script for Elegant Glow Aesthetic Clinic
# This script builds all Docker images for the application

echo "🚀 Building Docker Images for Elegant Glow Aesthetic Clinic"
echo "============================================================"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

echo ""
echo "📋 Step 1: Checking environment configuration..."
if [ ! -f ".env" ]; then
    echo "⚠️  Warning: .env file not found. Copying from backend/.env.example"
    cp backend/.env.example .env
    echo "✅ Created .env file. Please configure it with your settings."
fi

echo ""
echo "📋 Step 2: Building Frontend Docker Image..."
docker build -t elegant-glow-frontend:latest -f Dockerfile .
if [ $? -eq 0 ]; then
    echo "✅ Frontend image built successfully"
else
    echo "❌ Frontend image build failed"
    exit 1
fi

echo ""
echo "📋 Step 3: Building Backend Docker Image..."
docker build -t elegant-glow-backend:latest -f backend/Dockerfile ./backend
if [ $? -eq 0 ]; then
    echo "✅ Backend image built successfully"
else
    echo "❌ Backend image build failed"
    exit 1
fi

echo ""
echo "📋 Step 4: Pulling MongoDB Image..."
docker pull mongo:7.0
if [ $? -eq 0 ]; then
    echo "✅ MongoDB image pulled successfully"
else
    echo "❌ MongoDB image pull failed"
    exit 1
fi

echo ""
echo "📋 Step 5: Building all services with docker-compose..."
docker-compose build
if [ $? -eq 0 ]; then
    echo "✅ All services built successfully"
else
    echo "❌ Docker compose build failed"
    exit 1
fi

echo ""
echo "============================================================"
echo "🎉 All Docker images built successfully!"
echo "============================================================"
echo ""
echo "📊 Built Images:"
docker images | grep elegant-glow
echo ""
echo "🚀 Next Steps:"
echo "1. Configure your .env file with production settings"
echo "2. Start services: docker-compose up -d"
echo "3. Check logs: docker-compose logs -f"
echo "4. Access application:"
echo "   - Frontend: http://localhost:3000"
echo "   - Backend: http://localhost:5000"
echo "   - MongoDB: localhost:27017"
echo ""
echo "📝 Useful Commands:"
echo "   - Stop services: docker-compose down"
echo "   - View logs: docker-compose logs -f [service-name]"
echo "   - Restart service: docker-compose restart [service-name]"
echo "   - Remove volumes: docker-compose down -v"
echo ""

# Made with Bob
