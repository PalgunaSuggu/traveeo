import { HoverEffect } from "@/components/ui/card-hover-effect";

export function WhyWithUs() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-8 text-center">
            {/* Heading Section */}
               <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Why Select To Travel With Us?
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  We make your journeys seamless, safe, and memorable with our trusted
                services and innovative solutions for every kind of traveler.
                </p>
            </div>

            {/* Cards */}
            <div className="w-full max-w-7xl">
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}

export const projects = [
    {
        title: "End-to-End Planning",
        description:
            "From the big picture to the smallest detail, we handle all the logistics so you can travel stress-free.",
        link: "",
    },
    {
        title: "Insider Access & Local Gems",
        description: "Discover hidden spots and authentic experiences that most tourists miss, thanks to our on-the-ground connections.",
        link: "",
    },
    {
        title: "Experiences That Bring You Closer",
        description: "Think bonding adventures, shared laughs, and memories you’ll be talking about for years.",
        link: "",
    },
    {
        title: "24/7 Support While You Travel",
        description:
            "Whether it’s a delayed flight or a last-minute change, we’re always just a call or message away.",
        link: "",
    },
    {
        title: "Safety Comes First",
        description: "We choose trusted guides and family-friendly experiences, so you can explore with confidence.",
        link: "",
    },
    {
        title: "Clarity and Transparency",
        description: "No hidden agendas, no surprises—just clear communication and honest guidance throughout the process.",
        link: "",
    },
];

