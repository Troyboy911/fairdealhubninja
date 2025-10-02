'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Gift, TrendingUp, Users, DollarSign } from 'lucide-react'
import Image from 'next/image'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const [stats, setStats] = useState({
    totalSavings: 0,
    rewardsEarned: 0,
    referrals: 0,
    dealsClaimed: 0
  })

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!session) {
    redirect('/auth/signin')
  }

  useEffect(() => {
    // Fetch user stats
    fetch('/api/user/stats')
      .then(res => res.json())
      .then(data => setStats(data))
  }, [])

  const statCards = [
    {
      title: 'Total Savings',
      value: `$${stats.totalSavings}`,
      icon: <DollarSign className="h-8 w-8" />,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Rewards Earned',
      value: `${stats.rewardsEarned} points`,
      icon: <Gift className="h-8 w-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Referrals',
      value: `${stats.referrals} friends`,
      icon: <Users className="h-8 w-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Deals Claimed',
      value: `${stats.dealsClaimed} deals`,
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {session.user.name || 'User'}!
          </h1>
          <p className="text-gray-600">
            Here's your dashboard overview and personalized deals.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className={`flex-shrink-0 h-12 w-12 rounded-lg ${stat.bgColor} flex items-center justify-center ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Referral Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Referral Code</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              readOnly
              value={session.user.referralCode || 'GENERATE'}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
            <button
              onClick={() => navigator.clipboard.writeText(session.user.referralCode || '')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Copy
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Share this code with friends to earn 100 points for each successful referral!
          </p>
        </div>

        {/* Recent Deals */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Recent Deals</h2>
          <div className="text-center py-12">
            <Image
              src="/empty-state.svg"
              alt="No deals yet"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <p className="text-gray-600">Start browsing deals to see your claimed offers here!</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Browse Deals
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}