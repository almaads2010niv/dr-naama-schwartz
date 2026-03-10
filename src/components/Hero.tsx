"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Countdown from "./Countdown";

export default function Hero() {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with main image */}
      <div className="absolute inset-0">
        <Image
          src="/images/NAAMA MAIN.png"
          alt="ד״ר נעמה שוורץ - כירופרקטית בכירה"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        {/* Fade overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/60 to-transparent" />
        {/* Fade overlay from sides for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFFFFF]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="mx-auto w-40 h-40 relative">
            <Image
              src="/images/LOGO NAAMA.png"
              alt="לוגו ד״ר נעמה שוורץ"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
        </motion.div>

        {/* Free consultation badge — glowing & animated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
          className="mb-6 perspective-[1000px]"
        >
          <div className="inline-block relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2E9ED8] via-[#6B4FA0] to-[#2E9ED8] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Main badge */}
            <div className="relative march-badge-glow bg-gradient-to-br from-[#2E9ED8] via-[#2589C0] to-[#1E7BA8] rounded-2xl px-8 sm:px-10 py-5 border border-white/20 overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                />
              </div>

              {/* Sparkles */}
              <motion.span
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute top-2 right-4 text-[#6B4FA0] text-lg"
              >✦</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, -180, -360] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
                className="absolute bottom-2 left-6 text-[#6B4FA0] text-sm"
              >✦</motion.span>

              {/* Text */}
              <div className="relative z-10">
                <span className="font-[family-name:var(--font-heebo)] font-black text-2xl sm:text-3xl text-white drop-shadow-lg">
                  ייעוץ טלפוני ראשון —{" "}
                </span>
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block font-[family-name:var(--font-heebo)] font-black text-4xl sm:text-5xl text-[#6B4FA0] drop-shadow-lg"
                >
                  חינם
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info badges */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#2E9ED8]/20 border border-[#2E9ED8]/40 rounded-full px-5 py-2 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#2E9ED8] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#6B4FA0] tracking-wide font-[family-name:var(--font-heebo)]">
              20 מקומות בשבוע בלבד
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-emerald-400 font-[family-name:var(--font-heebo)]">
              ✓ ללא התחייבות
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-[#333333] font-[family-name:var(--font-heebo)]">
              ✓ 20+ שנות ניסיון
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-[family-name:var(--font-heebo)] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          <span className="block text-[#003D68]">יום חדש מתחיל</span>
          <span className="block text-gradient-red">כשהכאב נגמר</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          ד״ר נעמה שוורץ, כירופרקטית בכירה עם{" "}
          <span className="text-[#003D68] font-bold">20+ שנות ניסיון</span>{" "}
          בטיפול בכאב. שיטה ייחודית שמרפאה מהשורש — לא רק מטפלת בתסמינים.
          <br />
          <span className="text-[#003D68] font-medium">
            קבעו ייעוץ טלפוני ראשון חינם — 10 דקות שיכולות לשנות הכל.
          </span>
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-10"
        >
          <Countdown targetDate="2026-03-31T23:59:59+03:00" />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onClick={scrollToCheckout}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="cta-glow relative bg-[#2E9ED8] hover:bg-[#3CAEE5] text-white font-[family-name:var(--font-heebo)] font-bold text-lg sm:text-xl px-10 py-5 rounded-2xl transition-all duration-300 cursor-pointer group"
        >
          <span className="relative z-10">
            לקביעת ייעוץ חינם ←
          </span>
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </div>
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
