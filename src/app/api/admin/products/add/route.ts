import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const productData = await request.json()

    // Validate required fields
    const requiredFields = ['title', 'price', 'image', 'category', 'affiliateLink']
    for (const field of requiredFields) {
      if (!productData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Check if category exists
    const validCategories = [
      'Electronics', 'Fashion', 'Home', 'Beauty', 'Sports', 
      'Books', 'Toys', 'Automotive', 'Health', 'Garden'
    ]

    if (!validCategories.includes(productData.category)) {
      return NextResponse.json(
        { 
          error: `Invalid category. Valid categories: ${validCategories.join(', ')}`,
          suggestion: 'Please use one of the predefined categories or contact admin to add a new one.'
        },
        { status: 400 }
      )
    }

    // In production, this would save to database
    // For now, return success with mock data
    const newProduct = {
      id: `prod_${Date.now()}`,
      ...productData,
      originalPrice: productData.originalPrice || productData.price,
      commission: productData.commission || 0.03,
      source: productData.source || 'manual',
      trendingScore: 75,
      isActive: true,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      message: 'Product added successfully',
      product: newProduct
    })
  } catch (error) {
    console.error('Error adding product:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}