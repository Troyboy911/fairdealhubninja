import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, TrendingUp, Users, Gift, Zap } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Trending Products',
      description: 'Discover the hottest deals and trending products updated daily by our AI agent.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Referral Rewards',
      description: 'Earn rewards for every friend you refer. The more you share, the more you earn!'
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: 'Exclusive Deals',
      description: 'Get access to exclusive deals and discounts not available anywhere else.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Savings',
      description: 'Save up to 70% on your favorite brands with our real-time price tracking.'
    }
  ]

  const trendingProducts = [
    {
      id: 1,
      title: "Apple AirPods Pro (2nd Gen)",
      price: 199,
      originalPrice: 249,
      discount: 20,
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra",
      price: 1199,
      originalPrice: 1299,
      discount: 8,
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 3,
      title: "Nike Air Max 270",
      price: 89,
      originalPrice: 150,
      discount: 41,
      image: "https://via.placeholder.com/300x300"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Find the Best Deals with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  FairDealHub
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover trending products, exclusive deals, and earn rewards while saving money. 
                Our AI-powered platform brings you the best prices from trusted retailers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Browse Deals
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">4.9/5 from 2,000+ users</span>
                </div>
                <div className="text-sm text-gray-600">
                  Over $1M saved by our community
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-gray-100 rounded p-4">
                        <div className="h-20 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose FairDealHub?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We're more than just a deal site. We're your smart shopping companion that helps you save money while earning rewards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trending Deals Right Now
            </h2>
            <p className="text-xl text-gray-600">
              These hot deals won't last long. Grab them before they're gone!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {product.discount}% OFF
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    Get Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100"
            >
              View All Deals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of smart shoppers who are already saving money and earning rewards with FairDealHub.
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
          >
            Start Your Free Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}