import { NextRequest, NextResponse } from 'next/server'
import { ProductAgent } from '@/lib/product-agent'

export async function POST() {
  try {
    const agent = new ProductAgent()
    const products = await agent.runAgent()
    
    return NextResponse.json({
      message: 'Products synced successfully',
      count: products.length,
      products
    })
  } catch (error) {
    console.error('Error syncing products:', error)
    return NextResponse.json(
      { error: 'Failed to sync products' },
      { status: 500 }
    )
  }
}