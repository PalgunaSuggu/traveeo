import React from 'react'
import { ShieldCheck, HeartHandshake, Globe2, CheckCircle2, Users2, Route, CalendarCheck2 } from 'lucide-react'

const brand = {
  primary: '#0C5FA8',
  secondary: '#FAA31A',
}

const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 pt-8 lg:pt-28">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Traveeo
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We craft memorable journeys with expert planning, trusted partners, and a love for discovery. Your adventure begins here.
          </p>
        </div>

        {/* Intro Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Left: Mission */}
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <ul className="space-y-3">
              {[
                'Personalized itineraries tailored to your vibe and budget',
                'Handpicked stays, safe transport, and reliable local support',
                'Transparent pricing with zero hidden surprises',
                '24/7 assistance before, during, and after your trip',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#0C5FA8] dark:text-[#FAA31A]" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Stats card */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-6 shadow-sm">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20"
                 style={{ background: `radial-gradient(circle, ${brand.primary} 0%, transparent 60%)` }} />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-20"
                 style={{ background: `radial-gradient(circle, ${brand.secondary} 0%, transparent 60%)` }} />

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 relative">Why travelers choose us</h3>
            <div className="grid grid-cols-3 gap-4 relative">
              <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                <CalendarCheck2 className="w-6 h-6 mx-auto mb-2 text-[#0C5FA8] dark:text-[#FAA31A]" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">7+</p>
                <p className="text-xs text-gray-500">Years Experience</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                <Route className="w-6 h-6 mx-auto mb-2 text-[#0C5FA8] dark:text-[#FAA31A]" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">1.2k</p>
                <p className="text-xs text-gray-500">Trips Planned</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                <Users2 className="w-6 h-6 mx-auto mb-2 text-[#0C5FA8] dark:text-[#FAA31A]" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">8k+</p>
                <p className="text-xs text-gray-500">Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Our Values</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <ShieldCheck className="w-8 h-8 mb-3 text-[#0C5FA8] dark:text-[#FAA31A]" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Trust & Safety</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">We partner with verified operators and keep your safety first, always.</p>
            </div>
            <div className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <HeartHandshake className="w-8 h-8 mb-3 text-[#0C5FA8] dark:text-[#FAA31A]" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Care & Support</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">From planning to post-trip, our team is here to help at every step.</p>
            </div>
            <div className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <Globe2 className="w-8 h-8 mb-3 text-[#0C5FA8] dark:text-[#FAA31A]" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Authentic Experiences</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Explore destinations like a local with meaningful, well-paced itineraries.</p>
            </div>
          </div>
        </div>

        {/* CTA Band */}
        <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#0C5FA8] to-[#1076BE] dark:from-[#FAA31A] dark:to-[#e09215] text-white text-center">
          <h4 className="text-2xl font-semibold mb-2">Ready to plan your next trip?</h4>
          <p className="opacity-90">Tell us your dream destination and we’ll curate the perfect itinerary for you.</p>
        </div>
      </div>
    </section>
  )
}

export default About