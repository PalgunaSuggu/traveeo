import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
    return (
        <section className="w-full py-16 bg-white dark:bg-black bg-[url('/assets/contact.png')] bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="group max-w-3xl mx-auto text-center px-6 py-12 
                bg-white/10 dark:bg-black/30 
                backdrop-blur-xl border border-white/20 ring-1 ring-white/10
                rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Subscribe to Our Website
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Stay updated with the latest travel blogs, tips, and exclusive offers.
                        Enter your email below to subscribe!
                    </p>
                </div>

                {/* Subscribe Form */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white rounded-xl shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-yellow-400"
                    />
                    <Button className="w-full sm:w-auto px-6 py-3 rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 dark:from-yellow-500 dark:to-amber-400 dark:hover:from-yellow-400 dark:hover:to-amber-300 dark:text-black shadow-md hover:shadow-lg transition">
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
