import { NextRequest, NextResponse } from 'next/server'

// Mock admin stats for preview
export async function GET() {
  try {
    return NextResponse.json({
      totalProducts: 156,
      totalUsers: 2341,
      totalRevenue: 45230.50,
      totalCommissions: 1589.07,
      activeDeals: 89,
      todayEarnings: 45.67
    })
  } catch (error) {
    console.error('Error fetching admin stats:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}