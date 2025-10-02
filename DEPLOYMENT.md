# FairDealHub Deployment Guide

## 🚀 Deploy to Coolify on Your VPS

This guide will walk you through deploying FairDealHub to your VPS using Coolify.

### Prerequisites

1. **VPS Requirements**
   - Ubuntu 20.04+ or Debian 11+
   - 2GB+ RAM
   - 20GB+ disk space
   - Docker installed

2. **Domain Setup**
   - You own `fairdealhub.online`
   - DNS A record pointing to your VPS IP

### Step 1: Install Coolify

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Install Coolify
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

### Step 2: Configure Coolify

1. Access Coolify at `http://your-vps-ip:8000`
2. Create your admin account
3. Add your domain `fairdealhub.online`

### Step 3: Create Environment Variables

Create a `.env.production` file with your actual values:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/fairdealhub"

# NextAuth
NEXTAUTH_URL="https://fairdealhub.online"
NEXTAUTH_SECRET="your-256-bit-secret-key-here"

# Stripe (Add your live keys)
STRIPE_SECRET_KEY="sk_live_your_stripe_secret_key"
STRIPE_PUBLISHABLE_KEY="pk_live_your_stripe_publishable_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# Amazon Associates
AMAZON_ASSOCIATES_ID="fairdealhub0d-20"

# Admin Account
ADMIN_EMAIL="admin@fairdealhub.online"
ADMIN_PASSWORD="secure-admin-password"
```

### Step 4: Deploy via GitHub

1. **Create GitHub Repository**
   ```bash
   # From your local project
   git remote add origin https://github.com/yourusername/fairdealhub.git
   git push -u origin main
   ```

2. **Add to Coolify**
   - Go to Coolify dashboard
   - Click "New Project"
   - Select "GitHub"
   - Choose your repository

3. **Configure Environment**
   - Add all environment variables from `.env.production`
   - Set build command: `npm run build`
   - Set start command: `npm start`
   - Set port: `3000`

### Step 5: Database Setup

1. **Create PostgreSQL Database**
   ```bash
   docker run -d \
     --name fairdealhub-db \
     -e POSTGRES_USER=fairdealhub \
     -e POSTGRES_PASSWORD=your-secure-password \
     -e POSTGRES_DB=fairdealhub \
     -p 5432:5432 \
     -v postgres_data:/var/lib/postgresql/data \
     postgres:15-alpine
   ```

2. **Run Database Migrations**
   ```bash
   npx prisma migrate deploy
   ```

### Step 6: SSL Certificate

Coolify automatically provisions SSL certificates via Let's Encrypt for your domain.

### Step 7: Final Setup

1. **Access Admin Panel**
   - Visit `https://fairdealhub.online/admin`
   - Login with admin credentials

2. **Start Product Sync**
   - Go to Admin Dashboard
   - Click "Sync Products" to fetch trending products
   - Products will auto-sync every 6 hours

### Monitoring & Logs

- **Coolify Dashboard**: Monitor deployment status
- **Logs**: View real-time logs in Coolify
- **Health Check**: `https://fairdealhub.online/api/health`

### Troubleshooting

**Database Connection Issues**
- Check DATABASE_URL format
- Ensure PostgreSQL is running
- Verify firewall allows port 5432

**Build Failures**
- Check environment variables
- Verify all secrets are set
- Review build logs in Coolify

**SSL Certificate Issues**
- Ensure DNS is properly configured
- Wait 5-10 minutes for certificate generation
- Check domain propagation

### Backup Strategy

1. **Database Backup**
   ```bash
   docker exec fairdealhub-db pg_dump -U fairdealhub fairdealhub > backup.sql
   ```

2. **Application Backup**
   - Coolify creates automatic backups
   - Manual backup via GitHub repository

### Scaling

For high traffic:
- Add more VPS instances
- Use PostgreSQL cluster
- Implement Redis caching
- CDN for static assets

### Support

For issues:
- Check Coolify logs
- Review application logs
- Contact support at admin@fairdealhub.online