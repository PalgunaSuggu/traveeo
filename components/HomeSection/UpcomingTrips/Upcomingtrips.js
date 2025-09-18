// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// // Dummy Trips Data (20 objects)
// const trips = [
//   { id: 1, title: "Bali, Indonesia", location: "Bali", price: "$1200 / Person", image: "https://picsum.photos/400/250?random=1" },
//   { id: 2, title: "Paris, France", location: "Paris", price: "$1500 / Person", image: "https://picsum.photos/400/250?random=2" },
//   { id: 3, title: "Tokyo, Japan", location: "Tokyo", price: "$1800 / Person", image: "https://picsum.photos/400/250?random=3" },
//   { id: 4, title: "Dubai, UAE", location: "Dubai", price: "$1000 / Person", image: "https://picsum.photos/400/250?random=4" },
//   { id: 5, title: "Sydney, Australia", location: "Sydney", price: "$1700 / Person", image: "https://picsum.photos/400/250?random=5" },
//   { id: 6, title: "Rome, Italy", location: "Rome", price: "$1400 / Person", image: "https://picsum.photos/400/250?random=6" },
//   { id: 7, title: "New York, USA", location: "New York", price: "$1600 / Person", image: "https://picsum.photos/400/250?random=7" },
//   { id: 8, title: "Cape Town, South Africa", location: "Cape Town", price: "$1300 / Person", image: "https://picsum.photos/400/250?random=8" },
//   { id: 9, title: "London, UK", location: "London", price: "$1550 / Person", image: "https://picsum.photos/400/250?random=9" },
//   { id: 10, title: "Singapore", location: "Singapore", price: "$1250 / Person", image: "https://picsum.photos/400/250?random=10" },
//   { id: 11, title: "Bangkok, Thailand", location: "Bangkok", price: "$1100 / Person", image: "https://picsum.photos/400/250?random=11" },
//   { id: 12, title: "Barcelona, Spain", location: "Barcelona", price: "$1450 / Person", image: "https://picsum.photos/400/250?random=12" },
//   { id: 13, title: "Maldives", location: "Maldives", price: "$2000 / Person", image: "https://picsum.photos/400/250?random=13" },
//   { id: 14, title: "Istanbul, Turkey", location: "Istanbul", price: "$1250 / Person", image: "https://picsum.photos/400/250?random=14" },
//   { id: 15, title: "Berlin, Germany", location: "Berlin", price: "$1350 / Person", image: "https://picsum.photos/400/250?random=15" },
//   { id: 16, title: "Moscow, Russia", location: "Moscow", price: "$1500 / Person", image: "https://picsum.photos/400/250?random=16" },
//   { id: 17, title: "Los Angeles, USA", location: "Los Angeles", price: "$1650 / Person", image: "https://picsum.photos/400/250?random=17" },
//   { id: 18, title: "Athens, Greece", location: "Athens", price: "$1200 / Person", image: "https://picsum.photos/400/250?random=18" },
//   { id: 19, title: "Rio de Janeiro, Brazil", location: "Rio de Janeiro", price: "$1400 / Person", image: "https://picsum.photos/400/250?random=19" },
//   { id: 20, title: "Seoul, South Korea", location: "Seoul", price: "$1500 / Person", image: "https://picsum.photos/400/250?random=20" },
// ];

// const Upcomingtrips = () => {
//   const [visibleTrips, setVisibleTrips] = useState(8); // show 8 trips by default

//   const handleLoadMore = () => {
//     setVisibleTrips((prev) => prev + 4); // add 4 more trips
//   };

//   return (
//     <section className="flex items-center justify-center min-h-screen w-full py-10 px-4 transition-colors duration-300">
//       <div className="max-w-7xl w-full">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Upcoming Trips
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Explore our upcoming travel packages designed for unique experiences.
//             Pick your favorite destination and request a quote today!                </p>
//         </div>

//         {/* Trips Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {trips.slice(0, visibleTrips).map((trip) => (
//             <div
//               key={trip.id}
//               className="rounded-2xl overflow-hidden shadow-lg border-dashed border-[#1076BE] dark:border-[#FAA31A] border-2 transition-colors duration-300"
//             >
//               {/* Trip Image */}
//               <div className="relative h-48 w-full">
//                 <Image
//                   src={trip.image}
//                   alt={trip.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Trip Info */}
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                   {trip.title}
//                 </h3>
//                 <div className="flex justify-between mb-4">
//                   <span className="px-4 py-2 text-sm rounded-full bg-[#0C5FA8]/10 text-[#0C5FA8] dark:bg-[#0C5FA8]/20 dark:text-[#0C5FA8]">
//                     🌍 {trip.location}
//                   </span>
//                   <span className="px-4 py-2 text-sm rounded-full bg-[#FAA31A]/10 text-[#FAA31A] dark:bg-[#FAA31A]/20 dark:text-[#FAA31A]">
//                     💰 {trip.price}
//                   </span>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex justify-between gap-3">
//                   <Button
//                     variant="outline"
//                     className="w-1/2 border-[#0C5FA8] text-[#0C5FA8] hover:bg-[#0C5FA8] hover:text-white dark:border-[#FAA31A] dark:text-[#FAA31A] dark:hover:bg-[#FAA31A] dark:hover:text-black"
//                   >
//                     Trip Details
//                   </Button>
//                   <Button
//                     className="w-1/2 bg-[#0C5FA8] text-white hover:bg-[#084478] dark:bg-[#FAA31A] dark:text-black dark:hover:bg-[#e09215]"
//                   >
//                     Send Quote
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         {visibleTrips < trips.length && (
//           <div className="flex justify-center mt-10">
//             <Button
//               onClick={handleLoadMore}
//               className="bg-[#0C5FA8] text-white hover:bg-[#084478] dark:bg-[#FAA31A] dark:text-black dark:hover:bg-[#e09215] px-6 py-3 rounded-lg"
//             >
//               Load More
//             </Button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Upcomingtrips;
"use client";

import React, { useState } from "react";
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
  { id: 9, title: "London, UK", location: "London", price: "$1550 / Person", image: "https://picsum.photos/600/400?random=9" },
  { id: 10, title: "Singapore", location: "Singapore", price: "$1250 / Person", image: "https://picsum.photos/600/400?random=10" },
  { id: 11, title: "Bangkok, Thailand", location: "Bangkok", price: "$1100 / Person", image: "https://picsum.photos/600/400?random=11" },
  { id: 12, title: "Barcelona, Spain", location: "Barcelona", price: "$1450 / Person", image: "https://picsum.photos/600/400?random=12" },
];

const Upcomingtrips = () => {
  const [visibleTrips, setVisibleTrips] = useState(8);

  const handleLoadMore = () => {
    setVisibleTrips((prev) => prev + 4);
  };

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
          {trips.slice(0, visibleTrips).map((trip, index) => {
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

        {/* Load More */}
        {visibleTrips < trips.length && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={handleLoadMore}
              className="px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-[#0C5FA8] to-[#1076BE] hover:from-[#0F6AB6] hover:to-[#1280CF] dark:from-[#FAA31A] dark:to-[#e09215] dark:text-black"
            >
              Load More Trips
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Upcomingtrips;
