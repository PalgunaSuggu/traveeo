"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, MessageCircle, ArrowUp } from "lucide-react";
import { useTheme } from "next-themes";

export default function FloatingActionButtons() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const phone = "919950188813"; // uses the contact number found in Contact page
    const url = `https://wa.me/${phone}`;
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* Theme toggle (top) */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="rounded-md shadow-lg hover:shadow-xl w-12 h-12 bg-[#0C5FA8] hover:bg-[#1076BE] text-white \
                   dark:bg-[#FAA31A] dark:hover:bg-[#e09215] dark:text-black border border-white/30 \
                   focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 dark:focus-visible:ring-black/30"
        aria-label="Toggle theme"
        title="Toggle theme"
     >
        {resolvedTheme === "dark" ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </Button>

      {/* Scroll to top (middle) */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleScrollTop}
        className="rounded-md shadow-lg hover:shadow-xl w-12 h-12 bg-black text-white \
                   dark:bg-white dark:text-gray-900 border border-white/20 dark:border-gray-200 \
                   focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 dark:focus-visible:ring-black/30"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </Button>

      {/* WhatsApp (bottom) */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleWhatsApp}
        className="rounded-md shadow-lg hover:shadow-xl w-12 h-12 bg-[#25D366] hover:bg-[#1ebe5c] text-white border border-white/30 \
                   focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}
