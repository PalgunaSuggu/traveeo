"use client";
import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { CalendarDays } from 'lucide-react'

const categories = [
  'All',
  'September 2025',
  'October 2025',
  'November 2025',
  'December 2025',
  'January 2026',
  'February 2026',
]

// Demo data: replace with real data source later
const allTrips = [
  { id: 1, title: 'Bali Beach Escape', category: 'October 2025', duration: '4 Nights and 5 Days', price: '₹62,000', blurb: 'Sun, surf, and temples with curated island tours.', image: 'https://picsum.photos/600/400?random=1' },
  { id: 2, title: 'Kashmir Paradise', category: 'September 2025', duration: '5 Nights and 6 Days', price: '₹48,000', blurb: 'Valleys, shikara rides, and mountain vistas.', image: 'https://picsum.photos/600/400?random=2' },
  { id: 3, title: 'Dubai City Lights', category: 'November 2025', duration: '3 Nights and 4 Days', price: '₹55,000', blurb: 'Skylines, dunes, and a premium city experience.', image: 'https://picsum.photos/600/400?random=3' },
  { id: 4, title: 'Thailand Island Hop', category: 'November 2025', duration: '4 Nights and 5 Days', price: '₹52,000', blurb: 'Bangkok buzz to serene Phuket beaches.', image: 'https://picsum.photos/600/400?random=4' },
  { id: 5, title: 'Jaipur & Udaipur Royal Trail', category: 'December 2025', duration: '4 Nights and 5 Days', price: '₹34,000', blurb: 'Palaces, lakes, and vibrant bazaars.', image: 'https://picsum.photos/600/400?random=5' },
  { id: 6, title: 'Kerala Backwaters', category: 'January 2026', duration: '3 Nights and 4 Days', price: '₹29,500', blurb: 'Houseboats, spices, and serene canals.', image: 'https://picsum.photos/600/400?random=6' },
  { id: 7, title: 'Europe Winter Sampler', category: 'December 2025', duration: '6 Nights and 7 Days', price: '₹1,35,000', blurb: 'Christmas markets and snowy streets.', image: 'https://picsum.photos/600/400?random=7' },
  { id: 8, title: 'Andaman Blue Escape', category: 'October 2025', duration: '4 Nights and 5 Days', price: '₹58,000', blurb: 'Coral reefs, pristine sands, and sunsets.', image: 'https://picsum.photos/600/400?random=8' },
  { id: 9, title: 'Meghalaya Living Roots', category: 'February 2026', duration: '4 Nights and 5 Days', price: '₹36,000', blurb: 'Cascades, caves, and living bridges.', image: 'https://picsum.photos/600/400?random=9' },
  { id: 10, title: 'Maldives Overwater Bliss', category: 'January 2026', duration: '3 Nights and 4 Days', price: '₹1,10,000', blurb: 'Lagoon villas and surreal blues.', image: 'https://picsum.photos/600/400?random=10' },
  { id: 11, title: 'Ladakh Monasteries', category: 'September 2025', duration: '5 Nights and 6 Days', price: '₹49,000', blurb: 'High passes and calm gompas.', image: 'https://picsum.photos/600/400?random=11' },
  { id: 12, title: 'Singapore Family Fun', category: 'February 2026', duration: '3 Nights and 4 Days', price: '₹59,000', blurb: 'Parks, rides, and seamless travel.', image: 'https://picsum.photos/600/400?random=12' },
]

const UpComingTrips = () => {
  const [activeCat, setActiveCat] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)

  const filteredTrips = useMemo(() => {
    const list = activeCat === 'All' ? allTrips : allTrips.filter(t => t.category === activeCat)
    return list
  }, [activeCat])

  const visibleTrips = filteredTrips.slice(0, visibleCount)
  const canLoadMore = visibleCount < filteredTrips.length

  const handleLoadMore = () => setVisibleCount(c => Math.min(c + 6, filteredTrips.length))
  const handleChangeCat = (cat) => {
    setActiveCat(cat)
    setVisibleCount(6)
  }

  return (
    <section className="bg-gray-100 dark:bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">Upcoming Trips</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our curated departures across months. Handpicked stays, smooth transfers, and memorable local experiences.
          </p>
        </div>

        {/* Category Filters */}
        <div className="relative mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleChangeCat(cat)}
                className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all
                  ${activeCat === cat
                    ? 'bg-[#0C5FA8] text-white dark:bg-[#FAA31A] dark:text-black border-transparent'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#0C5FA8]/40 dark:hover:border-[#FAA31A]/40'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleTrips.map((trip) => (
            <div key={trip.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 hover:border-[#0C5FA8]/40 dark:hover:border-[#FAA31A]/40">
              {/* Image/Visual Placeholder */}
              <div className="relative h-44 w-full overflow-hidden">
  <img 
    src={trip.image} 
    alt={trip.title} 
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
    loading="lazy"
  />
</div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#0C5FA8]/10 text-[#0C5FA8] dark:bg-[#FAA31A]/20 dark:text-[#FAA31A]">
                    {trip.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm bg-gray-100 dark:bg-gray-800/50 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300">
  <CalendarDays className="w-3.5 h-3.5 text-[#0C5FA8] dark:text-[#FAA31A]" />
  {trip.duration}
</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{trip.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{trip.blurb}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
  <span className="text-[#0C5FA8] dark:text-[#FAA31A] font-semibold">{trip.price}</span>
  <span className="text-xs text-gray-500 dark:text-gray-400">per person</span>
</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-gray-200 dark:border-white/10 hover:border-[#0C5FA8]/40 dark:hover:border-[#FAA31A]/40">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-[#0C5FA8] hover:bg-[#1076BE] text-white dark:bg-[#FAA31A] dark:hover:bg-[#e09215] dark:text-black">
                      Send Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {canLoadMore && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-[#0C5FA8] hover:bg-[#1076BE] text-white dark:bg-[#FAA31A] dark:hover:bg-[#e09215] dark:text-black transition-colors"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default UpComingTrips