"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, HelpCircle, ChevronLeft } from "lucide-react";

interface Feature {
  name: string;
  naama: boolean;
  meds: boolean | "maybe";
  surgery: boolean | "maybe";
  physio: boolean | "maybe";
}

const features: Feature[] = [
  { name: "מטפל בשורש הבעיה", naama: true, meds: false, surgery: "maybe", physio: "maybe" },
  { name: "ללא תרופות", naama: true, meds: false, surgery: true, physio: true },
  { name: "ללא ניתוח", naama: true, meds: true, surgery: false, physio: true },
  { name: "שילוב גוף ונפש", naama: true, meds: false, surgery: false, physio: false },
  { name: "תוצאות לטווח ארוך", naama: true, meds: false, surgery: "maybe", physio: "maybe" },
  { name: "ללא תופעות לוואי", naama: true, meds: false, surgery: false, physio: true },
  { name: "טיפול מותאם אישית", naama: true, meds: false, surgery: "maybe", physio: "maybe" },
  { name: "ייעוץ טלפוני חינם", naama: true, meds: false, surgery: false, physio: false },
  { name: "20+ שנות ניסיון", naama: true, meds: false, surgery: false, physio: false },
];

const StatusIcon = ({ status }: { status: boolean | "maybe" }) => {
  if (status === true)
    return <Check className="w-5 h-5 text-[#2E9ED8]" />;
  if (status === "maybe")
    return <HelpCircle className="w-4 h-4 text-gray-500" />;
  return <X className="w-4 h-4 text-gray-600/40" />;
};

const competitors = [
  { key: "naama", label: "שיטת ד״ר נעמה", highlight: true },
  { key: "meds", label: "תרופות", highlight: false },
  { key: "surgery", label: "ניתוח", highlight: false },
  { key: "physio", label: "פיזיותרפיה", highlight: false },
];

export default function ComparisonTable() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [canScrollMore, setCanScrollMore] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollLeft > 10) setHasScrolled(true);
    setCanScrollMore(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;
    const el = scrollRef.current;
    const timer = setTimeout(() => {
      el.scrollTo({ left: 60, behavior: "smooth" });
      setTimeout(() => {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }, 600);
    }, 1200);
    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#FFFFFF]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            למה השיטה של ד״ר נעמה <span className="text-gradient-red">שונה?</span>
          </h2>
        </motion.div>

        {isMobile && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mb-6 font-[family-name:var(--font-heebo)]"
          >
            גלול לצד לראות את ההשוואה המלאה ←
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-4 scroll-smooth"
            onScroll={handleScroll}
          >
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-4 text-right" />
                  {competitors.map((c) => (
                    <th
                      key={c.key}
                      className={`p-4 text-center font-[family-name:var(--font-heebo)] font-bold text-sm whitespace-nowrap ${
                        c.highlight
                          ? "bg-[#2E9ED8] text-white rounded-t-2xl text-base"
                          : "text-gray-600 bg-gray-100 rounded-t-xl"
                      }`}
                    >
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {features.map((f, i) => (
                  <motion.tr
                    key={f.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-3 sm:p-4 text-right font-[family-name:var(--font-heebo)] text-sm text-gray-500 whitespace-nowrap">
                      {f.name}
                    </td>
                    <td className={`p-3 sm:p-4 text-center ${
                      i === features.length - 1 ? "rounded-b-2xl" : ""
                    } bg-[#2E9ED8]/5 border-x border-[#2E9ED8]/10`}>
                      <div className="flex justify-center">
                        <StatusIcon status={f.naama} />
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center bg-gray-50">
                      <div className="flex justify-center">
                        <StatusIcon status={f.meds} />
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={f.surgery} />
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center bg-gray-50">
                      <div className="flex justify-center">
                        <StatusIcon status={f.physio} />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <AnimatePresence>
            {isMobile && !hasScrolled && canScrollMore && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-0 bottom-4 w-12 pointer-events-none flex items-center justify-center z-20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent" />
                <motion.div
                  animate={{ x: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="relative z-10 flex flex-col items-center gap-1"
                >
                  <div className="w-8 h-8 rounded-full bg-[#2E9ED8] flex items-center justify-center shadow-lg shadow-[#2E9ED8]/40">
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-bold font-[family-name:var(--font-heebo)] whitespace-nowrap">
                    השוואה
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {isMobile && canScrollMore && (
            <div className="absolute left-0 top-0 bottom-4 w-6 bg-gradient-to-r from-[#FFFFFF]/60 to-transparent pointer-events-none z-10" />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg mb-2 font-[family-name:var(--font-heebo)]">
            כשמטפלים בשורש
          </p>
          <h3 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl text-[#003D68]">
            הריפוי <span className="text-gradient-red">באמת מגיע</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
