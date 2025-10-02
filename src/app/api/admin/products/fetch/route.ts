import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url || !url.includes('amazon.com')) {
      return NextResponse.json(
        { error: 'Please provide a valid Amazon product URL' },
        { status: 400 }
      )
    }

    // Mock Amazon product data - in production, use Amazon PA API
    // For demo purposes, we'll extract basic info from URL
    const productId = url.match(/\/dp\/([A-Z0-9]+)/)?.[1] || 'B0BDHWDR12'

    const mockProducts = {
      'B0BDHWDR12': {
        title: 'Apple AirPods Pro (2nd Generation)',
        description: 'Wireless earbuds with active noise cancellation, spatial audio, and up to 6 hours of listening time',
        price: 199.99,
        originalPrice: 249.99,
        image: 'https://m.media-amazon.com/images/I/61SUj2aKoOL._AC_SL1500_.jpg',
        category: 'Electronics',
        affiliateLink: url.includes('?tag=') ? url : `${url}?tag=fairdealhub0d-20`
      },
      'B0CMDWC436': {
        title: 'Samsung Galaxy S24 Ultra',
        description: 'Latest flagship smartphone with AI features, S Pen, and 200MP camera',
        price: 1199.99,
        originalPrice: 1299.99,
        image: 'https://m.media-amazon.com/images/I/71F4Z4X6S1L._AC_SL1500_.jpg',
        category: 'Electronics',
        affiliateLink: url.includes('?tag=') ? url : `${url}?tag=fairdealhub0d-20`
      }
    }

    const product = mockProducts[productId] || mockProducts['B0BDHWDR12']

    return NextResponse.json({ product })
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product data' },
      { status: 500 }
    )
  }
}