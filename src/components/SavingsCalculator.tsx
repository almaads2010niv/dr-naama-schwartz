"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Frown, Smile } from "lucide-react";

export default function SavingsCalculator() {
  const [painDays, setPainDays] = useState(4);
  const painDaysPerYear = painDays * 52;
  const reducedDays = Math.round(painDaysPerYear * 0.8);

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#FFFFFF]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#2E9ED8] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            חשבו בעצמכם
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            מחשבון <span className="text-gradient-red">ימים ללא כאב</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#FFFFFF] to-[#F8F6F3] border border-gray-200 rounded-[32px] p-8 sm:p-10"
        >
          {/* Slider */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <label className="text-gray-600 font-[family-name:var(--font-heebo)]">
                כמה ימים בשבוע יש לך כאב?
              </label>
              <span className="font-[family-name:var(--font-heebo)] font-black text-2xl text-[#003D68]">
                {painDays}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="7"
              value={painDays}
              onChange={(e) => setPainDays(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#2E9ED8] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#2E9ED8]/30"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2 font-[family-name:var(--font-heebo)]">
              <span>יום 1</span>
              <span>כל יום</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-100 rounded-2xl p-5 text-center">
              <Frown className="w-6 h-6 text-gray-600 mx-auto mb-2" />
              <p className="text-gray-600 text-sm mb-1 font-[family-name:var(--font-heebo)]">
                ימי כאב בשנה
              </p>
              <p className="font-[family-name:var(--font-heebo)] font-black text-2xl text-[#003D68]">
                {painDaysPerYear}
              </p>
            </div>
            <div className="bg-[#2E9ED8]/10 border border-[#2E9ED8]/20 rounded-2xl p-5 text-center">
              <Smile className="w-6 h-6 text-[#2E9ED8] mx-auto mb-2" />
              <p className="text-gray-600 text-sm mb-1 font-[family-name:var(--font-heebo)]">
                ימים שאפשר להפחית
              </p>
              <motion.p
                key={reducedDays}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="font-[family-name:var(--font-heebo)] font-black text-3xl text-[#2E9ED8]"
              >
                {reducedDays}
              </motion.p>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm mb-6 font-[family-name:var(--font-heebo)]">
            עם טיפול נכון, אפשר להפחית עד 80% מימי הכאב
          </p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToCheckout}
            className="w-full cta-glow bg-[#2E9ED8] hover:bg-[#3CAEE5] text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all duration-300 cursor-pointer"
          >
            אני רוצה {reducedDays} ימים נוספים בלי כאב ←
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
