#!/bin/bash

# GitHub Repository Setup Script for FairDealHub

# Set GitHub repository URL
GITHUB_REPO="https://github.com/yourusername/fairdealhub.git"

# Configure git
git config --global user.email "admin@fairdealhub.online"
git config --global user.name "FairDealHub Admin"

# Add remote repository
git remote remove origin 2>/dev/null || true
git remote add origin $GITHUB_REPO

# Create .env.example for production
cat > .env.example << EOF
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/fairdealhub"

# NextAuth
NEXTAUTH_URL="https://fairdealhub.online"
NEXTAUTH_SECRET="your-256-bit-secret-key-here"

# Stripe
STRIPE_SECRET_KEY="sk_live_your_stripe_secret_key"
STRIPE_PUBLISHABLE_KEY="pk_live_your_stripe_publishable_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# Amazon Associates
AMAZON_ASSOCIATES_ID="fairdealhub0d-20"

# Admin Account
ADMIN_EMAIL="admin@fairdealhub.online"
ADMIN_PASSWORD="secure-admin-password"
EOF

# Add all files
git add -A

# Commit with comprehensive message
git commit -m "🚀 FairDealHub v1.0 - Complete Affiliate Marketing Platform

✅ AI-powered product discovery with Amazon Associates integration
✅ Admin dashboard with product management and analytics
✅ User registration, rewards, and referral system
✅ Sales funnel with high-converting landing page
✅ Production-ready with Docker and Coolify deployment
✅ Responsive design with Tailwind CSS
✅ Complete API endpoints for all features

Features:
- Amazon Associates ID: fairdealhub0d-20
- Auto-sync every 6 hours
- 6 trending products with real Amazon links
- User dashboard with rewards tracking
- Admin product management with add/edit/delete
- Real-time analytics and commissions tracking
- Production deployment ready for fairdealhub.online

Ready for immediate deployment to Coolify!"

# Push to GitHub
git push -u origin main

echo "✅ Repository pushed to GitHub!"
echo "Next steps:"
echo "1. Set up Coolify at https://app.coolify.io"
echo "2. Add your GitHub repository"
echo "3. Configure environment variables from .env.example"
echo "4. Deploy to https://fairdealhub.online"
EOF

chmod +x fairdealhub/setup-github.sh