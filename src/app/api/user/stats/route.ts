import { NextRequest, NextResponse } from 'next/server'

// Mock user stats for preview
export async function GET() {
  try {
    return NextResponse.json({
      totalSavings: 1275.50,
      rewardsEarned: 450,
      referrals: 12,
      dealsClaimed: 8
    })
  } catch (error) {
    console.error('Error fetching user stats:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}