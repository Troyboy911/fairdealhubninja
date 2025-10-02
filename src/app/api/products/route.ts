import { NextRequest, NextResponse } from 'next/server'

// Mock data for preview - in production this would come from database
const mockProducts = [
  {
    id: "1",
    title: "Apple AirPods Pro (2nd Generation)",
    description: "Wireless earbuds with active noise cancellation, spatial audio, and up to 6 hours of listening time",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://m.media-amazon.com/images/I/61SUj2aKoOL._AC_SL1500_.jpg",
    category: "Electronics",
    affiliateLink: "https://www.amazon.com/dp/B0BDHWDR12?tag=fairdealhub0d-20",
    discount: 20,
    trendingScore: 95
  },
  {
    id: "2",
    title: "Samsung Galaxy S24 Ultra",
    description: "Latest flagship smartphone with AI features, S Pen, and 200MP camera",
    price: 1199.99,
    originalPrice: 1299.99,
    image: "https://m.media-amazon.com/images/I/71F4Z4X6S1L._AC_SL1500_.jpg",
    category: "Electronics",
    affiliateLink: "https://www.amazon.com/dp/B0CMDWC436?tag=fairdealhub0d-20",
    discount: 8,
    trendingScore: 92
  },
  {
    id: "3",
    title: "Ninja Air Fryer Max XL",
    description: "5.5 QT capacity air fryer with 7-in-1 functionality for healthy cooking",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://m.media-amazon.com/images/I/71K7Q4F8VXL._AC_SL1500_.jpg",
    category: "Home",
    affiliateLink: "https://www.amazon.com/dp/B07S75HV4S?tag=fairdealhub0d-20",
    discount: 25,
    trendingScore: 88
  },
  {
    id: "4",
    title: "Sony WH-1000XM5 Wireless Headphones",
    description: "Industry-leading noise canceling with 30-hour battery life",
    price: 349.99,
    originalPrice: 399.99,
    image: "https://m.media-amazon.com/images/I/61vJtKbVfPL._AC_SL1500_.jpg",
    category: "Electronics",
    affiliateLink: "https://www.amazon.com/dp/B09XS7JWHH?tag=fairdealhub0d-20",
    discount: 13,
    trendingScore: 90
  },
  {
    id: "5",
    title: "Instant Pot Duo Plus 9-in-1",
    description: "6-quart pressure cooker, slow cooker, rice cooker, and more",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://m.media-amazon.com/images/I/71V03X2GHVL._AC_SL1500_.jpg",
    category: "Home",
    affiliateLink: "https://www.amazon.com/dp/B07W55DDFB?tag=fairdealhub0d-20",
    discount: 31,
    trendingScore: 85
  },
  {
    id: "6",
    title: "Nike Air Max 270",
    description: "Comfortable running shoes with air cushioning and stylish design",
    price: 89.99,
    originalPrice: 150.00,
    image: "https://via.placeholder.com/300x300",
    category: "Fashion",
    affiliateLink: "https://www.amazon.com/dp/B07D9BB72V?tag=fairdealhub0d-20",
    discount: 40,
    trendingScore: 88
  }
]

export async function GET() {
  try {
    // For preview, return mock data with proper Amazon affiliate links
    return NextResponse.json(mockProducts)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}