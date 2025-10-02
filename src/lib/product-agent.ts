import axios from 'axios'
import { prisma } from './prisma'
import { z } from 'zod'

const ProductSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  originalPrice: z.number().optional(),
  image: z.string().optional(),
  url: z.string().url(),
  category: z.string(),
  subcategory: z.string().optional(),
  affiliateLink: z.string().url(),
  commission: z.number(),
  source: z.string(),
  trendingScore: z.number().default(0)
})

export class ProductAgent {
  private sources = [
    { name: 'amazon', enabled: true, commission: 0.03 },
    { name: 'rakuten', enabled: true, commission: 0.05 },
    { name: 'cj', enabled: true, commission: 0.06 },
    { name: 'impact', enabled: true, commission: 0.07 }
  ]

  async fetchTrendingProducts() {
    const products = []
    
    // Fetch from Amazon
    if (this.sources.find(s => s.name === 'amazon')?.enabled) {
      products.push(...await this.fetchAmazonProducts())
    }
    
    // Fetch from Rakuten
    if (this.sources.find(s => s.name === 'rakuten')?.enabled) {
      products.push(...await this.fetchRakutenProducts())
    }
    
    // Fetch from Commission Junction
    if (this.sources.find(s => s.name === 'cj')?.enabled) {
      products.push(...await this.fetchCJProducts())
    }
    
    // Fetch from Impact
    if (this.sources.find(s => s.name === 'impact')?.enabled) {
      products.push(...await this.fetchImpactProducts())
    }
    
    return products
  }

  private async fetchAmazonProducts() {
    const amazonProducts = [
      {
        title: "Apple AirPods Pro (2nd Generation)",
        description: "Wireless earbuds with active noise cancellation, spatial audio, and up to 6 hours of listening time",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://m.media-amazon.com/images/I/61SUj2aKoOL._AC_SL1500_.jpg",
        url: "https://www.amazon.com/dp/B0BDHWDR12",
        category: "Electronics",
        subcategory: "Audio",
        affiliateLink: "https://www.amazon.com/dp/B0BDHWDR12?tag=fairdealhub0d-20",
        commission: 0.03,
        source: "amazon",
        trendingScore: 95
      },
      {
        title: "Samsung Galaxy S24 Ultra",
        description: "Latest flagship smartphone with AI features, S Pen, and 200MP camera",
        price: 1199.99,
        originalPrice: 1299.99,
        image: "https://m.media-amazon.com/images/I/71F4Z4X6S1L._AC_SL1500_.jpg",
        url: "https://www.amazon.com/dp/B0CMDWC436",
        category: "Electronics",
        subcategory: "Smartphones",
        affiliateLink: "https://www.amazon.com/dp/B0CMDWC436?tag=fairdealhub0d-20",
        commission: 0.03,
        source: "amazon",
        trendingScore: 92
      },
      {
        title: "Ninja Air Fryer Max XL",
        description: "5.5 QT capacity air fryer with 7-in-1 functionality for healthy cooking",
        price: 149.99,
        originalPrice: 199.99,
        image: "https://m.media-amazon.com/images/I/71K7Q4F8VXL._AC_SL1500_.jpg",
        url: "https://www.amazon.com/dp/B07S75HV4S",
        category: "Home",
        subcategory: "Kitchen",
        affiliateLink: "https://www.amazon.com/dp/B07S75HV4S?tag=fairdealhub0d-20",
        commission: 0.04,
        source: "amazon",
        trendingScore: 88
      },
      {
        title: "Sony WH-1000XM5 Wireless Headphones",
        description: "Industry-leading noise canceling with 30-hour battery life",
        price: 349.99,
        originalPrice: 399.99,
        image: "https://m.media-amazon.com/images/I/61vJtKbVfPL._AC_SL1500_.jpg",
        url: "https://www.amazon.com/dp/B09XS7JWHH",
        category: "Electronics",
        subcategory: "Audio",
        affiliateLink: "https://www.amazon.com/dp/B09XS7JWHH?tag=fairdealhub0d-20",
        commission: 0.03,
        source: "amazon",
        trendingScore: 90
      },
      {
        title: "Instant Pot Duo Plus 9-in-1",
        description: "6-quart pressure cooker, slow cooker, rice cooker, and more",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://m.media-amazon.com/images/I/71V03X2GHVL._AC_SL1500_.jpg",
        url: "https://www.amazon.com/dp/B07W55DDFB",
        category: "Home",
        subcategory: "Kitchen",
        affiliateLink: "https://www.amazon.com/dp/B07W55DDFB?tag=fairdealhub0d-20",
        commission: 0.04,
        source: "amazon",
        trendingScore: 85
      }
    ]
    
    return amazonProducts
  }

  private async fetchRakutenProducts() {
    // Placeholder for Rakuten API integration
    return [
      {
        title: "Samsung Galaxy S24 Ultra",
        description: "Latest flagship smartphone with AI features",
        price: 1199.99,
        originalPrice: 1299.99,
        image: "https://via.placeholder.com/300x300",
        url: "https://rakuten.com/galaxy-s24",
        category: "Electronics",
        subcategory: "Smartphones",
        affiliateLink: "https://rakuten.com/galaxy-s24?affiliate=fairdealhub",
        commission: 0.05,
        source: "rakuten",
        trendingScore: 92
      }
    ]
  }

  private async fetchCJProducts() {
    // Placeholder for Commission Junction API
    return [
      {
        title: "Nike Air Max 270",
        description: "Comfortable running shoes with air cushioning",
        price: 89.99,
        originalPrice: 150.00,
        image: "https://via.placeholder.com/300x300",
        url: "https://nike.com/air-max-270",
        category: "Fashion",
        subcategory: "Shoes",
        affiliateLink: "https://nike.com/air-max-270?cj=fairdealhub",
        commission: 0.06,
        source: "cj",
        trendingScore: 88
      }
    ]
  }

  private async fetchImpactProducts() {
    // Placeholder for Impact API
    return [
      {
        title: "Dyson V15 Detect Vacuum",
        description: "Cordless vacuum with laser dust detection",
        price: 649.99,
        originalPrice: 749.99,
        image: "https://via.placeholder.com/300x300",
        url: "https://dyson.com/v15-detect",
        category: "Home",
        subcategory: "Appliances",
        affiliateLink: "https://dyson.com/v15-detect?impact=fairdealhub",
        commission: 0.07,
        source: "impact",
        trendingScore: 85
      }
    ]
  }

  async categorizeProducts(products: any[]) {
    const categories = {
      'Electronics': ['smartphone', 'laptop', 'tablet', 'headphone', 'speaker', 'camera'],
      'Fashion': ['clothing', 'shoes', 'accessories', 'jewelry', 'watch'],
      'Home': ['furniture', 'appliance', 'kitchen', 'decor', 'bedding'],
      'Beauty': ['skincare', 'makeup', 'haircare', 'fragrance'],
      'Sports': ['fitness', 'outdoor', 'sports', 'gym', 'exercise'],
      'Books': ['book', 'ebook', 'audiobook', 'education'],
      'Toys': ['toy', 'game', 'puzzle', 'children'],
      'Automotive': ['car', 'auto', 'vehicle', 'accessory']
    }

    return products.map(product => {
      const description = product.description.toLowerCase()
      let bestCategory = 'Other'
      
      for (const [category, keywords] of Object.entries(categories)) {
        if (keywords.some(keyword => description.includes(keyword))) {
          bestCategory = category
          break
        }
      }
      
      return { ...product, category: bestCategory }
    })
  }

  async saveProducts(products: any[]) {
    const saved = []
    
    for (const product of products) {
      try {
        const validated = ProductSchema.parse(product)
        const savedProduct = await prisma.product.upsert({
          where: { url: validated.url },
          update: {
            ...validated,
            updatedAt: new Date()
          },
          create: validated
        })
        saved.push(savedProduct)
      } catch (error) {
        console.error('Error saving product:', error)
      }
    }
    
    return saved
  }

  async runAgent() {
    console.log('Starting product agent...')
    const products = await this.fetchTrendingProducts()
    const categorized = await this.categorizeProducts(products)
    const saved = await this.saveProducts(categorized)
    
    console.log(`Agent completed: ${saved.length} products processed`)
    return saved
  }
}

// Schedule the agent to run every 6 hours
export async function startProductAgent() {
  const agent = new ProductAgent()
  
  // Run immediately
  await agent.runAgent()
  
  // Schedule recurring runs
  if (process.env.NODE_ENV === 'production') {
    const cron = require('node-cron')
    cron.schedule('0 */6 * * *', async () => {
      console.log('Running scheduled product agent...')
      await agent.runAgent()
    })
  }
}