
"use client";
import React from "react";
import { MessageCircle, Headphones, Mountain, Megaphone } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Travel Destination",
    description:
      "From a buffet of trip itineraries handcrafted by our travel experts.",
    icon: <MessageCircle className="w-10 h-10 text-[#0C5FA8]" />,
  },
  {
    number: "02",
    title: "Ask Queries & Book Your Trip!",
    description:
      "Connect with us over a call, solve your queries and book your trip hassle-free.",
    icon: <Headphones className="w-10 h-10 text-[#0C5FA8]" />,
  },
  {
    number: "03",
    title: "Ohai, Your Trip Day Has Arrived",
    description:
      "Keep your adventure spirit high and pack your bags for a lifetime experience.",
    icon: <Mountain className="w-10 h-10 text-[#0C5FA8]" />,
  },
  {
    number: "04",
    title: "Share #InstaPerfect Memories...",
    description:
      "Flaunt your memorable travel memories over social media with your dear ones.",
    icon: <Megaphone className="w-10 h-10 text-[#0C5FA8]" />,
  },
];

const HowToPlan = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-16 transition-colors duration-300">
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
        <div className="relative space-y-16">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${isLeft ? "" : "md:flex-row-reverse"
                  }`}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0C5FA8] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Connector Line */}
                <div className="hidden md:block flex-1 h-1 bg-gray-300 dark:bg-gray-700 mx-6"></div>

                {/* Step Card */}
                <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 border border-[#0C5FA8]/30 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-md">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
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
