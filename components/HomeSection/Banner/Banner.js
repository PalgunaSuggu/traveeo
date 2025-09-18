import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Banner = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/demo.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Discover Your Next Adventure
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-6">
                    Find the best destinations, flights, and travel experiences
                </p>

                {/* Search Input */}
                <div className="flex w-full max-w-sm items-center gap-2">
                    <Input type="text" placeholder="Search destinations..." />
                    <Button className="bg-[#0C5FA8] hover:bg-[#1076BE] dark:bg-[#FAA31A] text-white dark:text-black">Search</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
