"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function GuiltRelease() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#FFFFFF]" />

      {/* Soft gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#6B4FA0]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Heart icon */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#6B4FA0]/10 border border-[#6B4FA0]/20 mb-8"
          >
            <Heart className="w-8 h-8 text-[#6B4FA0]" />
          </motion.div>

          {/* Horizontal rule accent */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-gradient-to-l from-[#6B4FA0]/40 to-transparent" />
            <span className="text-[#6B4FA0] text-xs font-bold tracking-[0.3em] font-[family-name:var(--font-heebo)]">
              רגע של כנות
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-[#6B4FA0]/40 to-transparent" />
          </div>

          {/* Main text */}
          <p className="font-[family-name:var(--font-assistant)] text-xl sm:text-2xl text-gray-500 leading-[1.8] sm:leading-[1.9]">
            <span className="text-[#003D68] font-semibold">
              זה בסדר שהרגלת לחיות עם הכאב.
            </span>
            <br />
            שנה, שנתיים, אולי יותר. אמרת לעצמך ״זה יעבור״, לקחת משכך,
            המשכת הלאה. אבל הכאב לא הלך — הוא רק שינה כתובת.
            <br />
            <br />
            הייעוץ הטלפוני הזה,{" "}
            <span className="text-[#6B4FA0] font-semibold">
              10 דקות בלבד עם ד״ר נעמה אישית
            </span>
            , נוצר בדיוק כדי לתת לך את הדחיפה הקטנה לחזור לעצמך.
            <br />
            <span className="text-[#003D68] font-medium">
              לא צריך להיות מושלם. רק צריך להתחיל.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
