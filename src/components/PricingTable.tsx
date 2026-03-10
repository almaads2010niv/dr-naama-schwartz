"use client";

import { motion } from "framer-motion";
import { X, Check, Star, ArrowDown, Phone } from "lucide-react";

export default function PricingTable() {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#FFFFFF]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2E9ED8] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            מה מקבלים בייעוץ?
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            תעשו את <span className="text-gradient-red">ההשוואה</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Without action - Faded */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="h-full bg-[#FFFFFF]/50 border border-gray-200 rounded-3xl p-8 sm:p-10 opacity-60">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-gray-500" />
                </div>
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-gray-600">
                  להמשיך כמו שזה
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">להמשיך לסבול מכאבים יומיים</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">לבזבז על משככי כאבים שלא פותרים</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">לדחות טיפול עד שזה מחמיר</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">להתמודד לבד בלי כיוון</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">לשקול ניתוח יקר ומסוכן</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <span className="text-gray-600 text-sm font-[family-name:var(--font-heebo)]">העלות האמיתית:</span>
                <p className="font-[family-name:var(--font-heebo)] font-black text-2xl text-gray-600 mt-1">
                  איכות חיים
                </p>
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 bottom-4 right-4 border-2 border-[#2E9ED8]/10 rounded-3xl" />
            </div>
          </motion.div>

          {/* With Dr. Naama - Highlighted */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="h-full bg-gradient-to-br from-[#FFFFFF] to-[#F8F6F3] border-2 border-[#2E9ED8]/40 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              {/* Corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2E9ED8]/20 rounded-full blur-[80px]" />

              <div className="relative z-10">
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  <div className="flex items-center gap-2 bg-[#2E9ED8] text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg shadow-[#2E9ED8]/30 font-[family-name:var(--font-heebo)]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    ייעוץ טלפוני חינם
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/30 font-[family-name:var(--font-heebo)]">
                    ללא התחייבות!
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-8 justify-center">
                  <div className="w-10 h-10 rounded-xl bg-[#2E9ED8]/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#2E9ED8]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-[#003D68]">
                    שיחה עם ד״ר נעמה
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#2E9ED8] flex-shrink-0" />
                    <span className="text-[#333333] text-sm font-medium">10 דקות ייעוץ טלפוני אישי — חינם</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#2E9ED8] flex-shrink-0" />
                    <span className="text-[#333333] text-sm font-medium">ניתוח ראשוני של הכאב שלך</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#2E9ED8] flex-shrink-0" />
                    <span className="text-[#333333] text-sm font-medium">המלצה לדרך טיפול מותאמת</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#2E9ED8] flex-shrink-0" />
                    <span className="text-[#333333] text-sm font-medium">ד״ר נעמה אישית על הקו</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#2E9ED8] flex-shrink-0" />
                    <span className="text-[#333333] text-sm font-medium">20+ שנות ניסיון בשיטה ייחודית</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#2E9ED8]/20">
                  <div className="bg-[#2E9ED8]/10 rounded-2xl p-5 text-center border border-[#2E9ED8]/20">
                    <span className="text-[#6B4FA0] text-base font-bold font-[family-name:var(--font-heebo)]">העלות:</span>
                    <div className="flex items-baseline gap-3 justify-center mt-2">
                      <p className="font-[family-name:var(--font-heebo)] font-black text-7xl sm:text-8xl text-[#003D68]">
                        0
                      </p>
                      <span className="text-3xl text-[#003D68] font-bold">ש״ח</span>
                    </div>
                    <span className="text-[#6B4FA0] text-sm font-semibold">חינם לחלוטין!</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToCheckout}
                  className="w-full mt-8 cta-glow bg-[#2E9ED8] hover:bg-[#3CAEE5] text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>לקביעת ייעוץ חינם ←</span>
                  <ArrowDown className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
