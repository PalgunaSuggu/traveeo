import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogs = [
    {
        id: 1,
        title: "Exploring the Mountains",
        description: "A journey through the most scenic mountain ranges around the world.",
        date: "Sep 17, 2025",
        link: "#",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "Beach Escapes",
        description: "Discover the best hidden beaches to relax and unwind.",
        date: "Sep 16, 2025",
        link: "#",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "City Lights Adventures",
        description: "Exploring vibrant cities and their hidden gems.",
        date: "Sep 15, 2025",
        link: "#",
        image: "https://images.unsplash.com/photo-1508051123996-69f8caf4891b?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        title: "Countryside Retreats",
        description: "Escape the hustle and explore peaceful rural areas.",
        date: "Sep 14, 2025",
        link: "#",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 5,
        title: "Forest Trails",
        description: "Adventure through lush forests and hidden trails.",
        date: "Sep 13, 2025",
        link: "#",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    },
];

const HomeBlogs = () => {
    return (
        <section className="bg-gray-100 dark:bg-black">
            <div className="max-w-7xl mx-auto py-12 px-4">
                {/* New heading and description */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Discover Your Next Adventure
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Explore breathtaking destinations, hidden gems, and travel tips from around the world.
                        Let our blogs inspire your next journey and spark your wanderlust.
                    </p>
                </div>

                {/* Top 2 Blogs */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {blogs.slice(0, 2).map((blog) => (
                        <Link
                            key={blog.id}
                            href={blog.link}
                            className="group block rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-yellow-400 overflow-hidden"
                        >
                            <div className="overflow-hidden">
                                <div className="w-full aspect-[16/9]">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">{blog.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{blog.description}</p>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{blog.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom 3 cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {blogs.slice(2, 5).map((blog) => (
                        <Link
                            key={blog.id}
                            href={blog.link}
                            className="group block rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-yellow-400 overflow-hidden"
                        >
                            <div className="overflow-hidden">
                                <div className="w-full aspect-[16/9]">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">{blog.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{blog.description}</p>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{blog.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Blogs Button */}
                <div className="text-center mt-8">
                    <Link href="/blogs">
                        <Button className="w-48 bg-[#0C5FA8] text-white hover:bg-[#084478] dark:bg-[#FAA31A] dark:text-black dark:hover:bg-[#e09215]">
                            View All Blogs
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeBlogs;
