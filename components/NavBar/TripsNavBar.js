// "use client";

// import React from "react";
// import Link from "next/link";
// import { ChevronDown } from "lucide-react";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// const tripsNav = [
//     {
//         label: "Upcoming Trips",
//         items: [
//             { name: "September 2025 Trips", href: "/trips/upcoming/september" },
//             { name: "October 2025 Trips", href: "/trips/upcoming/october" },
//             { name: "Winter Specials", href: "/trips/upcoming/winter" },
//         ],
//     },
//     {
//         label: "Group Trips",
//         items: [
//             { name: "Friends Group Trips", href: "/trips/group/friends" },
//             { name: "Corporate Trips", href: "/trips/group/corporate" },
//             { name: "Family Packages", href: "/trips/group/family" },
//         ],
//     },
//     {
//         label: "International Trips",
//         items: [
//             { name: "Europe", href: "/trips/international/europe" },
//             { name: "Southeast Asia", href: "/trips/international/asia" },
//             { name: "Middle East", href: "/trips/international/middle-east" },
//         ],
//     },
//     {
//         label: "Domestic Trips",
//         items: [
//             { name: "North India", href: "/trips/domestic/north" },
//             { name: "South India", href: "/trips/domestic/south" },
//             { name: "North-East India", href: "/trips/domestic/northeast" },
//         ],
//     },
//     {
//         label: "Weekend Trips",
//         items: [
//             { name: "Goa Weekend", href: "/trips/weekend/goa" },
//             { name: "Coorg & Chikmagalur", href: "/trips/weekend/coorg" },
//             { name: "Jaipur Express", href: "/trips/weekend/jaipur" },
//         ],
//     },
//     {
//         label: "Backpacking Trips",
//         items: [
//             { name: "Himalayan Backpack", href: "/trips/backpacking/himalaya" },
//             { name: "Thailand Backpack", href: "/trips/backpacking/thailand" },
//             { name: "Bali Budget", href: "/trips/backpacking/bali" },
//         ],
//     },
// ];

// const TripsNavBar = () => {
//     return (
//         <nav className="w-ful">
//             <div className="container mx-auto flex justify-center gap-8">
//                 {tripsNav.map((menu) => (
//                     <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <button
//                                 className="flex items-center gap-1 text-base font-medium hover:text-[#0C5FA8] dark:hover:text-[#FAA31A] focus:outline-none border-none bg-transparent"
//                             >
//                                 {menu.label}
//                                 <ChevronDown className="w-4 h-4" />
//                             </button>
//                         </DropdownMenuTrigger>

//                         <DropdownMenuContent className="bg-white dark:bg-gray-800 shadow-lg rounded-md p-2">
//                             {menu.items.map((sub) => (
//                                 <Link
//                                     key={sub.name}
//                                     href={sub.href}
//                                     className="block px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
//                                 >
//                                     {sub.name}
//                                 </Link>
//                             ))}
//                         </DropdownMenuContent>
//                     </DropdownMenu>

//                 ))}
//             </div>
//         </nav>
//     );
// };

// export default TripsNavBar;
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, CalendarDays, Snowflake, Users, Briefcase, Home, Globe2, MapPin, Tent, Backpack, Mountain, Landmark, Building2, PalmTree, Island, Ship, CloudRain, Sun, Sparkles } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const tripsNav = [
    {
        label: "Upcoming Trips",
        items: [
            { name: "September 2025 Trips", href: "/trips/upcoming/september", icon: CalendarDays },
            { name: "October 2025 Trips", href: "/trips/upcoming/october", icon: CalendarDays },
            { name: "November 2025 Trips", href: "/trips/upcoming/november-2025", icon: CalendarDays },
            { name: "December 2025 Trips", href: "/trips/upcoming/december-2025", icon: CalendarDays },
            { name: "January 2026 Trips", href: "/trips/upcoming/january-2026", icon: CalendarDays },
            { name: "February 2026 Trips", href: "/trips/upcoming/february-2026", icon: CalendarDays },
            { name: "Winter Specials", href: "/trips/upcoming/winter", icon: Snowflake },
        ],
    },
    {
        label: "Group Trips",
        items: [
            { name: "Friends Group Trips", href: "/trips/group/friends", icon: Users },
            { name: "Corporate Trips", href: "/trips/group/corporate", icon: Briefcase },
            { name: "Family Packages", href: "/trips/group/family", icon: Home },
        ],
    },
    {
        label: "International Trips",
        items: [
            { name: "Northern Lights", href: "/trips/international/northern-lights", icon: Sparkles },
            { name: "Georgia", href: "/trips/international/georgia", icon: Landmark },
            { name: "Vietnam", href: "/trips/international/vietnam", icon: Landmark },
            { name: "Bali", href: "/trips/international/bali", icon: PalmTree },
            { name: "Europe", href: "/trips/international/europe", icon: Globe2 },
            { name: "Almaty", href: "/trips/international/almaty", icon: Mountain },
            { name: "Thailand", href: "/trips/international/thailand", icon: Landmark },
            { name: "Dubai", href: "/trips/international/dubai", icon: Building2 },
            { name: "Cambodia", href: "/trips/international/cambodia", icon: Landmark },
            { name: "Bhutan", href: "/trips/international/bhutan", icon: Mountain },
            { name: "Japan", href: "/trips/international/japan", icon: Landmark },
            { name: "Sri Lanka", href: "/trips/international/sri-lanka", icon: Island },
            { name: "Nepal", href: "/trips/international/nepal", icon: Mountain },
            { name: "Maldives", href: "/trips/international/maldives", icon: Island },
            { name: "Singapore", href: "/trips/international/singapore", icon: Building2 },
            { name: "Mauritius", href: "/trips/international/mauritius", icon: Island },
            { name: "Malaysia", href: "/trips/international/malaysia", icon: PalmTree },
        ],
    },
    {
        label: "Domestic Trips",
        items: [
            { name: "Ladakh", href: "/trips/domestic/ladakh", icon: Mountain },
            { name: "Spiti", href: "/trips/domestic/spiti", icon: Mountain },
            { name: "Kashmir", href: "/trips/domestic/kashmir", icon: Snowflake },
            { name: "Kedarnath", href: "/trips/domestic/kedarnath", icon: Landmark },
            { name: "Himachal", href: "/trips/domestic/himachal", icon: Mountain },
            { name: "Tawang", href: "/trips/domestic/tawang", icon: Landmark },
            { name: "Meghalaya", href: "/trips/domestic/meghalaya", icon: CloudRain },
            { name: "Kerala", href: "/trips/domestic/kerala", icon: PalmTree },
            { name: "Andaman", href: "/trips/domestic/andaman", icon: Ship },
            { name: "Rajasthan", href: "/trips/domestic/rajasthan", icon: Landmark },
            { name: "Uttarakhand", href: "/trips/domestic/uttarakhand", icon: Mountain },
        ],
    },
    {
        label: "Weekend Trips",
        items: [
            { name: "Goa Weekend", href: "/trips/weekend/goa", icon: Tent },
            { name: "Coorg & Chikmagalur", href: "/trips/weekend/coorg", icon: Tent },
            { name: "Jaipur Express", href: "/trips/weekend/jaipur", icon: CalendarDays },
        ],
    },
    {
        label: "Backpacking Trips",
        items: [
            { name: "Himalayan Backpack", href: "/trips/backpacking/himalaya", icon: Backpack },
            { name: "Thailand Backpack", href: "/trips/backpacking/thailand", icon: Backpack },
            { name: "Bali Budget", href: "/trips/backpacking/bali", icon: Backpack },
        ],
    },
];

const TripsNavBar = () => {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <>
            {/* Desktop Horizontal Navbar */}
            <nav className="hidden md:flex w-full justify-center gap-8">
                {tripsNav.map((menu, idx) => (
                    <div key={menu.label} onMouseEnter={() => setOpenIndex(idx)} onMouseLeave={() => setOpenIndex(null)}>
                        <DropdownMenu open={openIndex === idx} onOpenChange={(o) => setOpenIndex(o ? idx : null)}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-1 text-base font-medium bg-transparent hover:bg-transparent hover:text-[#0C5FA8] dark:hover:text-[#FAA31A] focus:outline-none">
                                    {menu.label}
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white dark:bg-black/70 shadow-lg rounded-md p-2 w-[520px] md:w-[560px] max-h-[70vh] overflow-auto">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                    {menu.items.map((sub) => {
                                        const Icon = sub.icon ?? MapPin;
                                        return (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="group flex items-center gap-2 px-3 py-2 text-md hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md"
                                            >
                                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0C5FA8]/0 dark:bg-[#FAA31A]/0 transition-all duration-200 group-hover:bg-[#0C5FA8]/10 dark:group-hover:bg-[#FAA31A]/15 group-hover:drop-shadow">
                                                    <Icon className="w-6 h-6 text-[#0C5FA8] dark:text-[#FAA31A] transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3" />
                                                </span>
                                                {sub.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ))}
                <Button className="bg-[#0C5FA8] hover:bg-[#1076BE] dark:bg-[#FAA31A] text-white dark:text-black">Get Started</Button>
            </nav>

            {/* Mobile Sheet Navbar */}
            <div className="md:hidden flex justify-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64 p-4 bg-white dark:bg-black/90">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xl font-bold dark:text-white">Trips</span>
                            <SheetTrigger asChild>
                                <button><X className="w-6 h-6" /></button>
                            </SheetTrigger>
                        </div>
                        <div className="flex flex-col gap-4">
                            {tripsNav.map((menu) => (
                                <div key={menu.label} className="flex flex-col gap-2">
                                    <span className="font-medium">{menu.label}</span>
                                    {menu.items.map((sub) => (
                                        <Link
                                            key={sub.name}
                                            href={sub.href}
                                            className="pl-4 text-sm hover:text-[#0C5FA8] dark:hover:text-[#FAA31A]"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default TripsNavBar;
