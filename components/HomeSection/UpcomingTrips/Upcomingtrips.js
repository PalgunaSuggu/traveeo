"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const trips = [
  { id: 1, title: "Bali, Indonesia", location: "Bali", price: "$1200 / Person", image: "https://picsum.photos/600/400?random=1" },
  { id: 2, title: "Paris, France", location: "Paris", price: "$1500 / Person", image: "https://picsum.photos/600/400?random=2" },
  { id: 3, title: "Tokyo, Japan", location: "Tokyo", price: "$1800 / Person", image: "https://picsum.photos/600/400?random=3" },
  { id: 4, title: "Dubai, UAE", location: "Dubai", price: "$1000 / Person", image: "https://picsum.photos/600/400?random=4" },
  { id: 5, title: "Sydney, Australia", location: "Sydney", price: "$1700 / Person", image: "https://picsum.photos/600/400?random=5" },
  { id: 6, title: "Rome, Italy", location: "Rome", price: "$1400 / Person", image: "https://picsum.photos/600/400?random=6" },
  { id: 7, title: "New York, USA", location: "New York", price: "$1600 / Person", image: "https://picsum.photos/600/400?random=7" },
  { id: 8, title: "Cape Town, South Africa", location: "Cape Town", price: "$1300 / Person", image: "https://picsum.photos/600/400?random=8" },
];

import { useRouter } from 'next/navigation';

const Upcomingtrips = () => {
  const router = useRouter();
  return (
    <section className="flex items-center justify-center w-full py-16 px-6 transition-colors duration-300">
      <div className="max-w-7xl w-full">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Trips
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our upcoming travel packages designed for unique experiences.
            Pick your favorite destination and request a quote today!                </p>
        </div>

        {/* Trips Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trips.map((trip) => {
            const durationOptions = [
              "1 Night and 2 Days",
              "2 Nights and 3 Days",
              "3 Nights and 4 Days",
              "4 Nights and 5 Days",
            ]; // Nights/Days
            const durationLabel = durationOptions[trip.id % durationOptions.length];
            return (
            <div
              key={trip.id}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 hover:border-[#0C5FA8]/40 dark:hover:border-[#FAA31A]/40"
            >
              {/* Image with Overlay */}
              <div className="relative h-48 w-full">
                <Image src={trip.image} alt={trip.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Duration Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-900 dark:bg-black/60 dark:text-white shadow">
                    ⏱️ {durationLabel}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-xl font-bold">{trip.title}</h3>
                  <p className="text-sm text-[#FAA31A] dark:text-[#FAA31A] opacity-95">{trip.price}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-3">
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-[#0C5FA8]/10 text-[#0C5FA8] dark:bg-[#FAA31A]/20 dark:text-[#FAA31A] w-fit">
                  🌍 {trip.location}
                </span>

                {/* Buttons */}
                <div className="flex justify-between gap-3 mt-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-[#0C5FA8] text-[#0C5FA8] hover:bg-[#0C5FA8] hover:text-white dark:border-[#FAA31A] dark:text-[#FAA31A] dark:hover:bg-[#FAA31A] dark:hover:text-black"
                  >
                    Trip Details
                  </Button>
                  <Button className="flex-1 text-white bg-gradient-to-r from-[#0C5FA8] to-[#1076BE] hover:from-[#0F6AB6] hover:to-[#1280CF] dark:from-[#FAA31A] dark:to-[#e09215] dark:text-black">
                    Send Quote
                  </Button>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* View All Trips Button */}
        <div className="mt-12 text-center">
          <Button 
            onClick={() => router.push('/trips/upcoming')}
            className="px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-[#0C5FA8] to-[#1076BE] hover:from-[#0F6AB6] hover:to-[#1280CF] dark:from-[#FAA31A] dark:to-[#e09215] dark:text-black"
          >
            View All Upcoming Trips
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Upcomingtrips;
