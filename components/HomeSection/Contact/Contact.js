import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
    return (
        <section className="w-full py-16 bg-white dark:bg-black bg-[url('/assets/contact.png')] bg-cover bg-center bg-no-repeat">
            <div className="max-w-3xl mx-auto text-center px-6 py-12 
                bg-white/10 dark:bg-black/20 
                backdrop-blur-md border-solid border-2 border-white/20 
                rounded-2xl shadow-lg">
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
                        className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600">
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
