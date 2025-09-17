"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogs = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore this amazing content!",
    date: `Sep ${17 - i}, 2025`,
    link: "#",
    // Added random query to force unique images
    image: `https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
}));

const Blog = () => {
    const [visible, setVisible] = useState(6); // show 8 blogs initially

    const handleLoadMore = () => {
        setVisible((prev) => prev + 6);
    };

    return (
        <div className="max-w-7xl mx-auto py-12 md:pt-40 px-4">
            {/* Page Heading */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Travel Blogs
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Dive into our latest travel experiences, tips, and hidden destinations from around the world.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {blogs.slice(0, visible).map((blog) => (
                    <Link
                        key={blog.id}
                        href={blog.link}
                        className="bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                        <img src={blog.image} alt={blog.title} className="w-full object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{blog.description}</p>
                            <span className="text-xs text-gray-400">{blog.date}</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Load More Button */}
            {visible < blogs.length && (
                <div className="text-center mt-8">
                    <Button onClick={handleLoadMore}
                        className="w-48 bg-[#0C5FA8] text-white hover:bg-[#084478] dark:bg-[#FAA31A] dark:text-black dark:hover:bg-[#e09215]"
                    >
                        Load More
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Blog;
