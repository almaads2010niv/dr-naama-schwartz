"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Building2, Heart } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

function AnimatedCounter({ end, suffix = "", label, icon, delay }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, end, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="relative group"
    >
      <div className="relative bg-gradient-to-br from-[#FFFFFF] to-[#F8F6F3] border border-gray-200 rounded-3xl p-8 sm:p-10 text-center overflow-hidden card-lift">
        {/* Accent corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#2E9ED8]/5 rounded-bl-[60px]" />

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2E9ED8]/10 text-[#2E9ED8] mb-5">
          {icon}
        </div>

        {/* Number */}
        <div className="font-[family-name:var(--font-heebo)] font-black text-5xl sm:text-6xl text-[#003D68] mb-3 counter-number">
          {count.toLocaleString()}
          <span className="text-[#2E9ED8]">{suffix}</span>
        </div>

        {/* Label */}
        <p className="text-gray-600 font-[family-name:var(--font-heebo)] font-medium text-lg">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#FFFFFF]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E9ED8]/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl text-center mb-4"
        >
          למה <span className="text-gradient-red">ד״ר נעמה שוורץ?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center mb-16 text-lg"
        >
          המספרים מדברים בעד עצמם
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <AnimatedCounter
            end={20}
            suffix="+"
            label="שנות ניסיון בטיפול בכאב"
            icon={<Calendar className="w-7 h-7" />}
            delay={0}
          />
          <AnimatedCounter
            end={14}
            label="שנים במרפאת כאב רמב״ם"
            icon={<Building2 className="w-7 h-7" />}
            delay={200}
          />
          <AnimatedCounter
            end={1000}
            suffix="+"
            label="מטופלים שחזרו לחיים ללא כאב"
            icon={<Heart className="w-7 h-7" />}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}
