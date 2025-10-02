# FairDealHub - AI-Powered Affiliate Marketing Platform

![FairDealHub Logo](public/logo.svg)

A state-of-the-art affiliate marketing platform that automatically discovers trending products from Amazon and other affiliate networks, complete with user rewards, referral system, and admin management.

## 🚀 Features

### Core Features
- **AI-Powered Product Discovery**: Automatically fetches trending products every 6 hours
- **Amazon Associates Integration**: Built-in support for your Amazon Associates ID (fairdealhub0d-20)
- **Multi-Category Products**: Electronics, Fashion, Home, Beauty, Sports, Books, Toys
- **Real-time Price Tracking**: Shows original vs discounted prices
- **User Rewards System**: Earn points for purchases and referrals
- **Referral Program**: Users earn 100 points per successful referral
- **Admin Dashboard**: Complete product and user management
- **Sales Funnel**: Optimized landing page with conversion tracking

### Technical Features
- **Next.js 15** with TypeScript
- **Tailwind CSS** for responsive design
- **Prisma ORM** with PostgreSQL
- **NextAuth.js** for authentication
- **Docker** support for Coolify deployment
- **CI/CD** with GitHub Actions
- **Real-time Analytics** and tracking

## 🎯 Quick Start (Local Development)

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- Amazon Associates Account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fairdealhub.git
   cd fairdealhub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local .env.local
   # Edit .env.local with your actual values
   ```

4. **Set up database**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Main site: http://localhost:3000
   - Admin panel: http://localhost:3000/admin
   - Products: http://localhost:3000/products

### Environment Variables

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/fairdealhub"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Stripe
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"

# Amazon Associates
AMAZON_ASSOCIATES_ID="fairdealhub0d-20"
```

## 🚀 Deploy to Production (Coolify)

### Quick Deploy

1. **Prepare your VPS**
   ```bash
   # Install Coolify
   curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/fairdealhub.git
   git push -u origin main
   ```

3. **Deploy via Coolify**
   - Access Coolify at `http://your-vps-ip:8000`
   - Create new project → GitHub → Select repository
   - Add environment variables
   - Deploy!

### Manual Deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📊 Admin Features

### Dashboard Overview
- Total products, users, revenue
- Real-time earnings tracking
- Recent activity feed

### Product Management
- Sync trending products
- Add/edit/delete products
- Category management
- Commission rate control

### User Management
- User analytics
- Referral tracking
- Reward distribution

## 👥 User Features

### Registration
- Email/password authentication
- Referral code system
- Secure NextAuth integration

### Dashboard
- Personal savings tracker
- Rewards points balance
- Referral code sharing
- Recent deals history

### Shopping Experience
- Browse by category
- Filter and sort products
- See discount percentages
- Direct affiliate links

## 🎯 Marketing Features

### Sales Funnel
- High-converting landing page
- Social proof elements
- Clear value proposition
- Call-to-action optimization

### Referral System
- Unique referral codes
- 100 points per referral
- Social sharing features
- Tracking dashboard

## 📈 Analytics & Tracking

- **User Analytics**: Registration, login, purchases
- **Product Analytics**: Views, clicks, conversions
- **Revenue Tracking**: Commissions, earnings
- **Referral Tracking**: Code usage, rewards

## 🔄 Automation

### Product Discovery
- **Schedule**: Every 6 hours
- **Sources**: Amazon, Rakuten, CJ, Impact
- **Categories**: Auto-categorization
- **Trending**: Score-based ranking

## 🛠️ Development

### Adding New Affiliate APIs

1. **Create API configuration** in `src/lib/product-agent.ts`
2. **Add environment variables** in `.env.local`
3. **Update admin dashboard** for configuration
4. **Test integration** with sample data

### Customizing Categories

Edit the category mapping in `product-agent.ts`:
```typescript
const categories = {
  'Electronics': ['smartphone', 'laptop', 'tablet', 'headphone'],
  'Fashion': ['clothing', 'shoes', 'accessories', 'jewelry'],
  // Add your categories
}
```

## 📞 Support

For support and questions:
- Email: admin@fairdealhub.online
- GitHub Issues: [Create issue](https://github.com/yourusername/fairdealhub/issues)

## 📄 License

MIT License - Feel free to use for commercial purposes.

## 🎉 Getting Started Checklist

- [ ] Set up VPS with Coolify
- [ ] Configure domain DNS
- [ ] Add environment variables
- [ ] Set up PostgreSQL
- [ ] Deploy application
- [ ] Create admin account
- [ ] Sync initial products
- [ ] Test user registration
- [ ] Verify affiliate links
- [ ] Launch marketing campaign

---

Built with ❤️ for the FairDealHub community