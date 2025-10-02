import { NextRequest, NextResponse } from 'next/server'

// Mock products data for admin preview
const mockAdminProducts = [
  {
    id: "prod_1",
    title: "Apple AirPods Pro (2nd Generation)",
    description: "Wireless earbuds with active noise cancellation",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://m.media-amazon.com/images/I/61SUj2aKoOL._AC_SL1500_.jpg",
    category: "Electronics",
    subcategory: "Audio",
    affiliateLink: "https://www.amazon.com/dp/B0BDHWDR12?tag=fairdealhub0d-20",
    commission: 0.03,
    trendingScore: 95,
    isActive: true,
    source: "amazon",
    createdAt: "2024-10-01T10:00:00Z"
  },
  {
    id: "prod_2",
    title: "Samsung Galaxy S24 Ultra",
    description: "Latest flagship smartphone with AI features",
    price: 1199.99,
    originalPrice: 1299.99,
    image: "https://m.media-amazon.com/images/I/71F4Z4X6S1L._AC_SL1500_.jpg",
    category: "Electronics",
    subcategory: "Smartphones",
    affiliateLink: "https://www.amazon.com/dp/B0CMDWC436?tag=fairdealhub0d-20",
    commission: 0.03,
    trendingScore: 92,
    isActive: true,
    source: "amazon",
    createdAt: "2024-10-01T09:30:00Z"
  },
  {
    id: "prod_3",
    title: "Ninja Air Fryer Max XL",
    description: "5.5 QT capacity air fryer with 7-in-1 functionality",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://m.media-amazon.com/images/I/71K7Q4F8VXL._AC_SL1500_.jpg",
    category: "Home",
    subcategory: "Kitchen",
    affiliateLink: "https://www.amazon.com/dp/B07S75HV4S?tag=fairdealhub0d-20",
    commission: 0.04,
    trendingScore: 88,
    isActive: true,
    source: "amazon",
    createdAt: "2024-10-01T08:15:00Z"
  }
]

export async function GET() {
  try {
    return NextResponse.json(mockAdminProducts)
  } catch (error) {
    console.error('Error fetching admin products:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}