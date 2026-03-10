"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-xl border-b border-gray-200"
          dir="rtl"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 hidden sm:block">
                <Image src="/images/LOGO NAAMA.png" alt="לוגו" fill className="object-contain" />
              </div>
              <span className="text-[#003D68] text-sm font-[family-name:var(--font-heebo)] font-bold hidden sm:block">
                ד״ר נעמה שוורץ | ייעוץ חינם
              </span>
              <span className="text-gray-600 text-xs hidden md:block">
                20 מקומות בשבוע בלבד
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToCheckout}
              className="bg-[#2E9ED8] hover:bg-[#3CAEE5] text-white font-[family-name:var(--font-heebo)] font-bold text-sm px-6 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              קבעו ייעוץ טלפוני חינם ←
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
