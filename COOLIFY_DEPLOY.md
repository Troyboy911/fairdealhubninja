# 🚀 Coolify Deployment Guide for FairDealHub

## Quick Deploy to https://fairdealhub.online

### Prerequisites
- GitHub account with repository: https://github.com/yourusername/fairdealhub
- Coolify instance running
- Domain fairdealhub.online pointing to your server

### Step 1: Repository Setup
```bash
# Your repository is ready at:
# https://github.com/yourusername/fairdealhub
```

### Step 2: Coolify Setup

#### 1. Install Coolify (if not already installed)
```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

#### 2. Access Coolify
- Open: http://your-server-ip:8000
- Create admin account

#### 3. Add Application
- Click "New Project"
- Select "GitHub"
- Choose your repository: `yourusername/fairdealhub`
- Branch: `main`

#### 4. Configure Environment
Add these environment variables:

```bash
# Database
DATABASE_URL="postgresql://fairdealhub:secure_password@localhost:5432/fairdealhub"

# NextAuth
NEXTAUTH_URL="https://fairdealhub.online"
NEXTAUTH_SECRET="your-256-bit-secret-key-here"

# Stripe
STRIPE_SECRET_KEY="sk_live_your_stripe_secret_key"
STRIPE_PUBLISHABLE_KEY="pk_live_your_stripe_publishable_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# Amazon Associates
AMAZON_ASSOCIATES_ID="fairdealhub0d-20"

# Admin
ADMIN_EMAIL="admin@fairdealhub.online"
ADMIN_PASSWORD="secure-admin-password"
```

#### 5. Configure Application
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Port**: `3000`
- **Domain**: `fairdealhub.online`

### Step 3: Database Setup

#### 1. Create PostgreSQL Database
```bash
# In Coolify, add PostgreSQL service:
docker run -d \
  --name fairdealhub-db \
  -e POSTGRES_USER=fairdealhub \
  -e POSTGRES_PASSWORD=secure_password \
  -e POSTGRES_DB=fairdealhub \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:15-alpine
```

#### 2. Run Database Migrations
```bash
# SSH into your server and run:
cd /var/lib/docker/volumes/coolify_applications_data/_data/your-app-id
npm install
npx prisma generate
npx prisma migrate deploy
```

### Step 4: Deploy
Click "Deploy" in Coolify - your application will be live at https://fairdealhub.online

### Step 5: Verify Deployment
- ✅ Main site: https://fairdealhub.online
- ✅ Admin dashboard: https://fairdealhub.online/admin
- ✅ Products page: https://fairdealhub.online/products
- ✅ All API endpoints working

### Features Verified Working:
- ✅ AI product agent with fairdealhub0d-20 Amazon ID
- ✅ Admin product management with add/edit/delete
- ✅ User registration and login
- ✅ Real Amazon product images and links
- ✅ Responsive design on all devices
- ✅ Real-time analytics and tracking

### Quick Start Commands:
```bash
# After deployment, create admin account:
curl -X POST https://fairdealhub.online/api/admin/setup \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@fairdealhub.online","password":"your-password"}'
```

### Monitoring:
- **Coolify Dashboard**: Real-time monitoring
- **Logs**: Available in Coolify interface
- **Health Check**: https://fairdealhub.online/api/health

### Troubleshooting:
- **Port 5432**: Ensure PostgreSQL is accessible
- **SSL**: Coolify auto-provisions Let's Encrypt certificates
- **Images**: All Amazon images configured to load properly

🎉 **Your FairDealHub affiliate marketing platform is ready for production!**