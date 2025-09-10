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

import React from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const tripsNav = [
    {
        label: "Upcoming Trips",
        items: [
            { name: "September 2025 Trips", href: "/trips/upcoming/september" },
            { name: "October 2025 Trips", href: "/trips/upcoming/october" },
            { name: "Winter Specials", href: "/trips/upcoming/winter" },
        ],
    },
    {
        label: "Group Trips",
        items: [
            { name: "Friends Group Trips", href: "/trips/group/friends" },
            { name: "Corporate Trips", href: "/trips/group/corporate" },
            { name: "Family Packages", href: "/trips/group/family" },
        ],
    },
    {
        label: "International Trips",
        items: [
            { name: "Europe", href: "/trips/international/europe" },
            { name: "Southeast Asia", href: "/trips/international/asia" },
            { name: "Middle East", href: "/trips/international/middle-east" },
        ],
    },
    {
        label: "Domestic Trips",
        items: [
            { name: "North India", href: "/trips/domestic/north" },
            { name: "South India", href: "/trips/domestic/south" },
            { name: "North-East India", href: "/trips/domestic/northeast" },
        ],
    },
    {
        label: "Weekend Trips",
        items: [
            { name: "Goa Weekend", href: "/trips/weekend/goa" },
            { name: "Coorg & Chikmagalur", href: "/trips/weekend/coorg" },
            { name: "Jaipur Express", href: "/trips/weekend/jaipur" },
        ],
    },
    {
        label: "Backpacking Trips",
        items: [
            { name: "Himalayan Backpack", href: "/trips/backpacking/himalaya" },
            { name: "Thailand Backpack", href: "/trips/backpacking/thailand" },
            { name: "Bali Budget", href: "/trips/backpacking/bali" },
        ],
    },
];

const TripsNavBar = () => {
    return (
        <>
            {/* Desktop Horizontal Navbar */}
            <nav className="hidden md:flex w-full justify-center gap-8">
                {tripsNav.map((menu) => (
                    <DropdownMenu key={menu.label}>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-1 text-base font-medium hover:text-[#0C5FA8] dark:hover:text-[#FAA31A] focus:outline-none bg-transparent">
                                {menu.label}
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white dark:bg-black/70 shadow-lg rounded-md p-2">
                            {menu.items.map((sub) => (
                                <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className="block px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md"
                                >
                                    {sub.name}
                                </Link>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
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
