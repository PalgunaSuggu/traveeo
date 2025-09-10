"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TripsNavBar from "./TripsNavBar";
import Image from "next/image";

const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80); // trigger after 80px
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* Primary Navbar */}
            <nav
                className={`w-full p-4 fixed top-0 left-0 right-0 transition-transform duration-300 z-50 
          ${resolvedTheme === "dark" ? "bg-black/80 text-white" : "bg-white/80 text-black"} shadow-sm
          ${isScrolled ? "-translate-y-full" : "translate-y-0"}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <Image src="/assets/traveeo.png" // put your logo image inside public/logo.png
                            alt="Traveeo Logo"
                            width={200}
                            height={200}
                            />
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="hover:text-[#0C5FA8] dark:hover:text-[#FAA31A]">
                                {item.label}
                            </Link>
                        ))}

                        <Button className="bg-[#0C5FA8] hover:bg-[#1076BE] dark:bg-[#FAA31A] text-white dark:text-black">Get Started</Button>

                        <Button variant="ghost" size="icon" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                            {resolvedTheme === "dark" ? (<Sun className="w-5 h-5" />) : (<Moon className="w-5 h-5" />)}
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center gap-4">
                        <Button variant="ghost" size="icon" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                            {resolvedTheme === "dark" ? (<Sun className="w-5 h-5" />) : (<Moon className="w-5 h-5" />)}
                        </Button>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon"><Menu className="w-6 h-6" /></Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-56 p-0 bg-white dark:bg-black/90">
                                <div className="flex justify-between items-center p-4 border-b">
                                    <Link href="/" className="text-xl font-bold dark:text-white">TRAVEEO</Link>
                                    <SheetTrigger asChild><button><X size={24} /></button></SheetTrigger>
                                </div>

                                <div className="flex flex-col gap-4 mt-4 px-4">
                                    {navItems.map((item) => (
                                        <Link key={item.href} href={item.href} className="text-lg">
                                            {item.label}
                                        </Link>
                                    ))}
                                    <Button className="mt-4 bg-[#0C5FA8] hover:bg-[#1076BE] dark:bg-[#FAA31A] text-white dark:text-black">Get Started</Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>

            {/* Secondary Navbar */}
            {/* <nav className={`fixed top-0 left-0 right-0 z-40 p-3 shadow-md transition-transform duration-300
          ${resolvedTheme === "dark" ? "bg-black/80 text-white" : "bg-white/80 text-black"}
          ${isScrolled ? "translate-y-0" : "translate-y-[72px]"} `}>
                <TripsNavBar />
            </nav> */}
        </>
    );
};

export default Navbar;
