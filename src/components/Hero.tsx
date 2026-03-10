"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Countdown from "./Countdown";

export default function Hero() {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient (placeholder until image is provided) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0A2E] via-[#0F0B1A] to-[#0D0820]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0F0B1A]" />
        {/* Purple diagonal accent */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#7C3AED]/10 to-transparent skew-x-[-12deg] origin-top-left" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Logo text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-[#C9A84C]/10 border border-[#7C3AED]/30 flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <span className="font-[family-name:var(--font-heebo)] font-black text-xl text-white block">ד״ר נעמה</span>
              <span className="font-[family-name:var(--font-heebo)] font-bold text-sm text-[#C9A84C]">שוורץ</span>
              <span className="font-[family-name:var(--font-assistant)] text-xs text-gray-400 block mt-1">כירופרקטית בכירה</span>
            </div>
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
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#7C3AED] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Main badge */}
            <div className="relative march-badge-glow bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#5B21B6] rounded-2xl px-8 sm:px-10 py-5 border border-white/20 overflow-hidden">
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
                className="absolute top-2 right-4 text-[#C9A84C] text-lg"
              >✦</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, -180, -360] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
                className="absolute bottom-2 left-6 text-[#C9A84C] text-sm"
              >✦</motion.span>

              {/* Text */}
              <div className="relative z-10">
                <span className="font-[family-name:var(--font-heebo)] font-black text-2xl sm:text-3xl text-white drop-shadow-lg">
                  ייעוץ טלפוני ראשון —{" "}
                </span>
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block font-[family-name:var(--font-heebo)] font-black text-4xl sm:text-5xl text-[#C9A84C] drop-shadow-lg"
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
          <div className="inline-flex items-center gap-2 bg-[#7C3AED]/20 border border-[#7C3AED]/40 rounded-full px-5 py-2 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#A78BFA] tracking-wide font-[family-name:var(--font-heebo)]">
              20 מקומות בשבוע בלבד
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-emerald-400 font-[family-name:var(--font-heebo)]">
              ✓ ללא התחייבות
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold text-white/80 font-[family-name:var(--font-heebo)]">
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
          <span className="block text-white">יום חדש מתחיל</span>
          <span className="block text-gradient-red">כשהכאב נגמר</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          ד״ר נעמה שוורץ, כירופרקטית בכירה עם{" "}
          <span className="text-white font-bold">20+ שנות ניסיון</span>{" "}
          בטיפול בכאב. שיטה ייחודית שמרפאה מהשורש — לא רק מטפלת בתסמינים.
          <br />
          <span className="text-white/90 font-medium">
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
          className="cta-glow relative bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-[family-name:var(--font-heebo)] font-bold text-lg sm:text-xl px-10 py-5 rounded-2xl transition-all duration-300 cursor-pointer group"
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
            <ChevronDown className="w-8 h-8 text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
