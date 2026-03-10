"use client";

import { motion } from "framer-motion";
import { Activity, Brain, HeartPulse, Bone, Wind } from "lucide-react";

const services = [
  {
    icon: <Bone className="w-10 h-10" />,
    label: "כאבי גב ושדרה",
    emotion: "פריצות דיסק, כאבי גב תחתון, בעיות בעמוד שדרה — טיפול שמגיע לשורש הבעיה ומחזיר אתכם לתפקוד מלא.",
    gradient: "from-[#2E9ED8]/30 to-[#1E7BA8]/10",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    icon: <Activity className="w-10 h-10" />,
    label: "כאבי צוואר וכתפיים",
    emotion: "מתח, תפיסות, כאבים מקרינים — שחרור עמוק שמרגיש כבר מהטיפול הראשון.",
    gradient: "from-[#6B4FA0]/20 to-[#2E9ED8]/10",
    span: "",
  },
  {
    icon: <Brain className="w-10 h-10" />,
    label: "כאבי ראש ומיגרנות",
    emotion: "במקום משככי כאבים — טיפול בגורם האמיתי. הקלה משמעותית לטווח ארוך.",
    gradient: "from-[#2E9ED8]/20 to-[#6B4FA0]/10",
    span: "",
  },
  {
    icon: <HeartPulse className="w-10 h-10" />,
    label: "שיקום לאחר פציעה",
    emotion: "חזרה לתפקוד מלא אחרי פציעות ספורט, תאונות או ניתוחים. תוכנית אישית מותאמת.",
    gradient: "from-[#6B4FA0]/20 to-[#1E7BA8]/10",
    span: "sm:col-span-2",
  },
  {
    icon: <Wind className="w-10 h-10" />,
    label: "טיפול בחרדה ומתח",
    emotion: "שילוב ייחודי של גוף ונפש — שחרור מתחים פיזיים שגורמים לחרדה ולמתח רגשי.",
    gradient: "from-[#2E9ED8]/20 to-transparent",
    span: "",
  },
];

export default function FacilitiesGallery() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#FFFFFF]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2E9ED8] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            תחומי התמחות
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            במה <span className="text-gradient-red">מטפלים?</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px] sm:auto-rows-[240px]">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group ${item.span} ${
                i === 0 ? "sm:row-span-2" : ""
              }`}
            >
              {/* Gradient background instead of image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 bg-gradient-to-t from-[#FFFFFF]/90 via-[#FFFFFF]/40 to-transparent">
                {/* Icon */}
                <div className="mb-3 text-[#2E9ED8] group-hover:text-[#6B4FA0] transition-colors duration-300">
                  {item.icon}
                </div>

                {/* Label */}
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-lg sm:text-xl text-[#003D68] mb-1">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-assistant)] text-[13px] sm:text-sm text-[#333333] leading-relaxed max-w-md">
                  {item.emotion}
                </p>
              </div>

              {/* Purple accent dot */}
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[#2E9ED8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
