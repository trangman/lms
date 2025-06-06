#!/bin/bash

# AML LMS Deployment Script
# This script helps deploy the LMS to Netlify

echo "🚀 AML LMS Deployment Script"
echo "=============================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Static files generated in 'out' directory"
    echo ""
    echo "🌐 Deploy Options:"
    echo "=================="
    echo ""
    echo "Option 1: Manual Deploy"
    echo "- Go to https://app.netlify.com"
    echo "- Drag the 'out' folder to the deploy area"
    echo ""
    echo "Option 2: GitHub Deploy (Recommended)"
    echo "1. Create a GitHub repository"
    echo "2. Run: git add ."
    echo "3. Run: git commit -m 'Deploy AML LMS'"
    echo "4. Run: git remote add origin <your-repo-url>"
    echo "5. Run: git push -u origin main"
    echo "6. Connect to Netlify via GitHub"
    echo ""
    echo "📖 See DEPLOYMENT.md for detailed instructions"
    echo ""
    echo "🎉 Ready for deployment!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi 