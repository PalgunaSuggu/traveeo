import React from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: 'How do I book a trip with Traveeo?',
    a: 'Browse our trips, choose your destination and dates, then click “Send Quote” or “Trip Details.” Our team will confirm availability and finalize your booking.'
  },
  {
    q: 'What is included in the package pricing?',
    a: 'Typically hotel stays, local transfers, select activities, and guided tours. Flights and personal expenses are usually excluded unless specified. We’ll share a clear inclusions/exclusions list.'
  },
  {
    q: 'Can I customize my itinerary?',
    a: 'Yes! We specialize in custom itineraries. Tell us your budget, interests, and pace—our experts will tailor the trip to your preferences.'
  },
  {
    q: 'Do you offer group discounts or corporate trips?',
    a: 'Absolutely. We arrange group, corporate, and special event travel. Share your group size and dates, and we’ll propose the best options and pricing.'
  },
  {
    q: 'What is your cancellation or refund policy?',
    a: 'Policies vary by destination and supplier. We provide transparent terms before booking. If you need to cancel, we’ll help you navigate refunds or credit wherever possible.'
  },
  {
    q: 'Is travel insurance required?',
    a: 'We strongly recommend it. Insurance helps cover medical emergencies, cancellations, and delays. We can guide you to reliable insurance options.'
  },
  {
    q: 'Do you support visa assistance?',
    a: 'Yes, we offer visa guidance and documentation support for many destinations. Final approval is always at the discretion of the issuing authority.'
  },
  {
    q: 'How can I contact support during my trip?',
    a: 'You’ll receive a dedicated contact number and WhatsApp support for on-trip assistance—available round-the-clock for emergencies.'
  }
]

const Faqs = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Answers to common questions about planning, bookings, pricing, and support.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 shadow-sm open:shadow-md transition-all"
            >
              <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4">
                <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                  {item.q}
                </span>
                <span
                  className="shrink-0 w-8 h-8 grid place-items-center rounded-full bg-[#0C5FA8]/10 text-[#0C5FA8] dark:bg-[#FAA31A]/20 dark:text-[#FAA31A] transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 pt-0 text-gray-700 dark:text-gray-300">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-800 dark:text-gray-200">
            Didn’t find your answer? <span className="font-semibold">We’re here to help.</span>
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-[#0C5FA8] to-[#1076BE] hover:from-[#0F6AB6] hover:to-[#1280CF] dark:from-[#FAA31A] dark:to-[#e09215] dark:text-black"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Faqs