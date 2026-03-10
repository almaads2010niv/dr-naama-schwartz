"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Radio, Building2 } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0B1A] via-[#0C0916] to-[#0F0B1A]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#7C3AED] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            נעים להכיר
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl">
            הכירו את <span className="text-gradient-red">ד״ר נעמה שוורץ</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-gradient-to-br from-[#1A1525] to-[#15111F] p-8 sm:p-12"
        >
          {/* Purple corner accents */}
          <div className="absolute top-0 right-0 w-24 h-1 bg-[#7C3AED] z-10" />
          <div className="absolute top-0 right-0 w-1 h-24 bg-[#7C3AED] z-10" />
          <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#7C3AED] z-10" />
          <div className="absolute bottom-0 left-0 w-1 h-24 bg-[#7C3AED] z-10" />

          {/* Bio content */}
          <div className="relative z-10">
            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mb-10"
            >
              <p className="font-[family-name:var(--font-assistant)] text-xl sm:text-2xl text-gray-300 leading-relaxed italic">
                &ldquo;הגוף מדבר אלינו כל הזמן. כשמבינים את השפה שלו — הריפוי מתחיל מבפנים.&rdquo;
              </p>
              <cite className="text-[#C9A84C] font-[family-name:var(--font-heebo)] font-bold text-sm mt-3 block not-italic">
                — ד״ר נעמה שוורץ
              </cite>
            </motion.blockquote>

            {/* Description */}
            <p className="text-gray-400 text-center leading-relaxed mb-10 max-w-2xl mx-auto">
              ד״ר נעמה שוורץ היא כירופרקטית בכירה שפיתחה שיטת טיפול ייחודית המשלבת גוף ונפש.
              במקום לטפל רק בתסמינים, השיטה מגיעה לשורש הבעיה ומאפשרת ריפוי אמיתי ולטווח ארוך.
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 bg-white/[0.03] rounded-2xl p-5 border border-white/5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heebo)] font-bold text-white text-sm mb-1">
                    דוקטורט בכירופרקטיקה
                  </h4>
                  <p className="text-gray-500 text-xs">CCCLA, לוס אנג׳לס, קליפורניה</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/[0.03] rounded-2xl p-5 border border-white/5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heebo)] font-bold text-white text-sm mb-1">
                    14 שנים במרפאת כאב רמב״ם
                  </h4>
                  <p className="text-gray-500 text-xs">המרכז הרפואי רמב״ם, חיפה</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/[0.03] rounded-2xl p-5 border border-white/5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heebo)] font-bold text-white text-sm mb-1">
                    מרצה ומנחת סדנאות
                  </h4>
                  <p className="text-gray-500 text-xs">מכללת תלתן — קורס טיפול בכאב כרוני</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/[0.03] rounded-2xl p-5 border border-white/5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C]">
                  <Radio className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heebo)] font-bold text-white text-sm mb-1">
                    מגישה ״חיים בריאים״
                  </h4>
                  <p className="text-gray-500 text-xs">תוכנית רדיו סול + מומחית רדיו חיפה</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
