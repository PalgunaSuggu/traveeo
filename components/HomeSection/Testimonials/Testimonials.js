"use client"; // needed for client components in Next.js 13+

import React, { useEffect, useRef } from "react";
import { Marquee } from "@/components/magicui/marquee";
// import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never experienced anything quite like this before. The simplicity, the speed, and the overall design are absolutely outstanding. Every detail feels carefully thought out, and it makes my work so much easier. I genuinely love using it daily, and it has completely transformed the way I manage my tasks.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "Honestly, I don’t know what else to say other than this has exceeded all my expectations. It feels intuitive, powerful, and yet extremely easy to use. I found myself getting comfortable within minutes. It’s rare to find something that feels this polished. This product has quickly become an essential part of my routine.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "This left me completely speechless. It’s rare to find a product that combines ease of use with real, meaningful results. I can’t imagine going back to the old way of doing things. Every feature feels like it was made with the user in mind. Honestly, I can’t recommend this highly enough.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I’ve tried countless tools over the years, but none have impressed me quite like this. It feels modern, fast, and reliable. What really stands out is how much thought clearly went into every feature. It’s more than just software; it feels like a partner that actually helps me succeed every single day.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I wasn’t sure what to expect at first, but after using this I’m convinced it’s one of the best things I’ve discovered. It saves me time, reduces stress, and genuinely makes my work easier. The design is beautiful, but more importantly, it works flawlessly. I’ve already recommended it to my colleagues and friends.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "This is the kind of product you don’t know you need until you try it, and then you wonder how you ever lived without it. It’s fast, dependable, and incredibly user-friendly. Every time I use it, I find another small detail that makes me smile. Truly an amazing experience all around.",
        img: "https://avatar.vercel.sh/james",
    },
];


const mediaFeatures = [
    { id: 1, type: "image", image: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Beautiful Landscape", description: "A scenic view of mountains.", link: "#" },
    { id: 2, type: "video", video: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Amazing Video", description: "Short video clip example.", link: "#" },
    { id: 3, type: "image", image: "https://www.w3schools.com/html/mov_bbb.mp4", title: "City Lights", description: "Night view of a city.", link: "#" },
    { id: 4, type: "video", video: "https://www.w3schools.com/html/movie.mp4", title: "Funny Clip", description: "Funny short video.", link: "#" },
    { id: 5, type: "image", image: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Forest Trail", description: "A walk through the forest.", link: "#" },
    { id: 6, type: "image", image: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Ocean Waves", description: "Relaxing ocean waves.", link: "#" },
    { id: 7, type: "video", video: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Tutorial Video", description: "Quick tutorial clip.", link: "#" },
    { id: 8, type: "image", image: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Sunset View", description: "Beautiful sunset.", link: "#" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
    return (
        <figure
            className={cn(
                "relative h-full w-96 cursor-pointer overflow-hidden border-solid rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function Testimonials() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-12 py-10 dark:bg-[url('/assets/bgBanner.png')] bg-cover bg-center bg-no-repeat">
            {/* Heading Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    What Our Customers Say
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    We value our customers and their feedback. Here's what some of them have shared about their experiences with us.
                </p>
            </div>

            {/* Marquee Section */}
            <div className="relative w-full overflow-hidden">
                <Marquee pauseOnHover className="[--duration:10s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>

                {/* Gradient Overlays */}
                {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div> */}
                {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
            </div>

            {/* Swiper Carousel Section */}
            <div className="w-full max-w-7xl">
                {/* <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    navigation={{
                        prevEl: "#custom-prev",
                        nextEl: "#custom-next",
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="w-full"
                >
                    {mediaFeatures.map((feature) => (
                        <SwiperSlide key={feature.id} className="cursor-pointer">
                            <Link href={feature.link}>
                                <Card className="flex flex-col bg-transparent border border-white/25 shadow-none">
                                    <div className="h-[200px] w-full relative rounded-md overflow-hidden">
                                        <video
                                            src={feature.video}
                                            controls
                                            className="w-full h-full object-cover"
                                            muted
                                            loop
                                            playsInline
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col justify-center">
                                        <h3 className="text-lg font-medium">{feature.title}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                                    </div>
                                </Card>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper> */}

                {/* Navigation Buttons */}
                {/* <div className="flex justify-end items-center gap-6 mt-4">
                    <button id="custom-prev" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white transition">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button id="custom-next" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white transition">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div> */}

            </div>
        </div>

    );
}
