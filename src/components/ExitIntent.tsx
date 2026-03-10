"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Gift } from "lucide-react";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, name: "exit_intent", email: "" }),
      });
    } catch {
      // silent
    }
    setSubmitted(true);
    setTimeout(() => {
      setShow(false);
      setDismissed(true);
    }, 3000);
  };

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
          dir="rtl"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-gradient-to-br from-[#FFFFFF] to-[#F8F6F3] border border-[#2E9ED8]/30 rounded-[32px] p-8 sm:p-10 max-w-md w-full z-10 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-[#003D68] hover:bg-gray-200 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Purple accent glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2E9ED8]/20 rounded-full blur-[80px]" />

            {!submitted ? (
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2E9ED8]/10 text-[#2E9ED8] mb-6">
                  <Gift className="w-8 h-8" />
                </div>

                <h3 className="font-[family-name:var(--font-heebo)] font-black text-2xl sm:text-3xl text-[#003D68] mb-3">
                  לפני שעוזבים!
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  10 דקות שיכולות לשנות הכל. ייעוץ טלפוני חינם עם ד״ר נעמה — בלי התחייבות.
                  השאירו טלפון ונחזור אליכם.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      placeholder="מספר טלפון"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pr-12 pl-4 text-[#333333] placeholder-gray-400 focus:outline-none focus:border-[#2E9ED8]/50 transition-all font-[family-name:var(--font-heebo)]"
                      dir="ltr"
                      autoFocus
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#2E9ED8] hover:bg-[#3CAEE5] text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all cursor-pointer"
                  >
                    ד״ר נעמה תתקשר אליי
                  </motion.button>
                </form>

                <p className="text-gray-600 text-xs mt-4">
                  בלי ספאם, רק שיחה אחת קצרה
                </p>
              </div>
            ) : (
              <div className="relative z-10 text-center py-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="text-4xl mb-4"
                >
                  ✅
                </motion.div>
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-[#003D68]">
                  תודה! ד״ר נעמה תחזור אליכם בקרוב
                </h3>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
