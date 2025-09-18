
"use client";
import React from "react";
import { MessageCircle, Headphones, Mountain, Megaphone } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Travel Destination",
    description:
      "From a buffet of trip itineraries handcrafted by our travel experts.",
    icon: <MessageCircle className="w-12 h-12 text-blue-600 dark:text-yellow-400" />,
  },
  {
    number: "02",
    title: "Ask Queries & Book Your Trip!",
    description:
      "Connect with us over a call, solve your queries and book your trip hassle-free.",
    icon: <Headphones className="w-12 h-12 text-blue-600 dark:text-yellow-400" />,
  },
  {
    number: "03",
    title: "Ohai, Your Trip Day Has Arrived",
    description:
      "Keep your adventure spirit high and pack your bags for a lifetime experience.",
    icon: <Mountain className="w-12 h-12 text-blue-600 dark:text-yellow-400" />,
  },
  {
    number: "04",
    title: "Share #InstaPerfect Memories...",
    description:
      "Flaunt your memorable travel memories over social media with your dear ones.",
    icon: <Megaphone className="w-12 h-12 text-blue-600 dark:text-yellow-400" />,
  },
];

const HowToPlan = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-16 transition-colors duration-300">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Plan Your Stress-Free Trip
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We make travel planning simple and enjoyable. Just follow these easy
            steps and embark on your dream journey without stress.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => {
            const chipLight = index === 0
              ? "bg-blue-50 ring-blue-200/60"
              : index === 1
              ? "bg-violet-50 ring-violet-200/60"
              : index === 2
              ? "bg-emerald-50 ring-emerald-200/60"
              : "bg-amber-50 ring-amber-200/60";
            const chipDark = index === 0
              ? "dark:bg-blue-950/40 dark:ring-blue-400/20"
              : index === 1
              ? "dark:bg-violet-950/40 dark:ring-violet-400/20"
              : index === 2
              ? "dark:bg-emerald-950/40 dark:ring-emerald-400/20"
              : "dark:bg-amber-950/40 dark:ring-amber-400/20";
            return (
              <div key={index} className="relative group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Accent gradient bar */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 dark:from-yellow-400 dark:via-orange-300 dark:to-yellow-400 opacity-100"></span>

                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 dark:from-yellow-500 dark:to-amber-400 text-white flex items-center justify-center text-lg font-bold shadow-lg ring-2 ring-white/60 dark:ring-white/10">
                  {step.number}
                </div>

                {/* Card header */}
                <div className="flex items-center gap-4 mb-3 mt-2">
                  <div className={`p-3 rounded-xl ring-1 shadow-sm transition ${chipLight} ${chipDark} group-hover:shadow-lg group-hover:-rotate-3 group-hover:translate-y-0.5`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-yellow-300 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 dark:via-yellow-300/40 bg-[length:0%_2px] bg-no-repeat bg-bottom group-hover:bg-[length:100%_2px] transition-all duration-300">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Call us or drop Hi on Whatsapp at{" "}
            <span className="font-bold text-green-600 dark:text-green-400">
              +91 1234567890
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToPlan;
