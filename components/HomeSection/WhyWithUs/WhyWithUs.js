import { HoverEffect } from "@/components/ui/card-hover-effect";

export function WhyWithUs() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-8 text-center">
            {/* Heading Section */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Why Select To Travel With Us?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                We make your journeys seamless, safe, and memorable with our trusted
                services and innovative solutions for every kind of traveler.
            </p>

            {/* Cards */}
            <div className="w-full max-w-6xl">
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}

export const projects = [
    {
        title: "Automated Shipping Bills Validation",
        description:
            "Easily validate all your shipping bills with automation to ensure compliance and error-free processing.",
        link: "https://www.leremitt.com",
    },
    {
        title: "Centralized Export Documentation",
        description:
            "Manage, share, and track all your export-related documents in a single secure platform.",
        link: "https://www.leremitt.com",
    },
    {
        title: "Customs Interface (ICEGATE)",
        description:
            "Direct integration with ICEGATE for seamless shipment lodging and customs documentation.",
        link: "https://www.leremitt.com",
    },
    {
        title: "Smart Logistics Management",
        description:
            "Book shipments, generate BLs, and track cargo with integrated freight forwarder tools.",
        link: "https://www.leremitt.com",
    },
    {
        title: "Banking & Payments Simplified",
        description:
            "Use LeRemitt and connected bank portals to manage payments, forex, and export financing.",
        link: "https://www.leremitt.com",
    },
    {
        title: "Inventory & Order Management",
        description:
            "Streamline inventory tracking and order processing to improve efficiency across exports.",
        link: "https://www.leremitt.com",
    },
];
