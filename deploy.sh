#!/bin/bash

# Build script for deploying to GitHub Pages

# Ensure we're in the frontend directory
cd frontend

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  yarn install
fi

# Build the project
echo "Building project..."
yarn build

# Go back to the root directory
cd ..

echo "Build complete! The static files are in frontend/dist/"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Commit and push your changes to GitHub"
echo "2. The GitHub Actions workflow will automatically deploy your site"
echo "3. Your site will be available at: https://YOUR_USERNAME.github.io/fitness-website/" 