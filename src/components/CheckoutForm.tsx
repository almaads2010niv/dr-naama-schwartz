"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, MessageSquare, ArrowLeft, Check, Loader2, PartyPopper } from "lucide-react";
import SpotsCounter from "./SpotsCounter";

type Step = "details" | "success";

export default function CheckoutForm() {
  const [step, setStep] = useState<Step>("details");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    painDescription: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "נא למלא שם מלא";
    if (!formData.phone.trim() || !/^0\d{8,9}$/.test(formData.phone.replace(/[-\s]/g, "")))
      newErrors.phone = "נא למלא מספר טלפון תקין";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: "",
          painDescription: formData.painDescription,
        }),
      });
    } catch {
      // Still show success
    } finally {
      setLoading(false);
      setStep("success");
    }
  };

  return (
    <section id="checkout" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#FFFFFF]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2E9ED8]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#2E9ED8] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            היום החדש שלך מתחיל בהחלטה אחת קטנה
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-2xl sm:text-3xl md:text-4xl mb-4">
            השאירו פרטים —{" "}
            <span className="text-gradient-red">ד״ר נעמה תחזור אליכם</span>
          </h2>
          <SpotsCounter />
        </motion.div>

        {/* Form card */}
        <motion.div
          layout
          className="bg-gradient-to-br from-[#FFFFFF] to-[#F8F6F3] border border-gray-200 rounded-[32px] p-8 sm:p-10 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Details */}
            {step === "details" && (
              <motion.form
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmitDetails}
                className="space-y-5"
              >
                {/* Name */}
                <div className="relative">
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="שם מלא"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full bg-gray-50 border ${
                      errors.name ? "border-[#2E9ED8]" : "border-gray-200"
                    } rounded-2xl py-4 pr-12 pl-4 text-[#333333] placeholder-gray-400 focus:outline-none focus:border-[#2E9ED8]/50 focus:ring-1 focus:ring-[#2E9ED8]/20 transition-all font-[family-name:var(--font-heebo)]`}
                  />
                  {errors.name && (
                    <p className="text-[#6B4FA0] text-xs mt-1 pr-4">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative">
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    placeholder="טלפון"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full bg-gray-50 border ${
                      errors.phone ? "border-[#2E9ED8]" : "border-gray-200"
                    } rounded-2xl py-4 pr-12 pl-4 text-[#333333] placeholder-gray-400 focus:outline-none focus:border-[#2E9ED8]/50 focus:ring-1 focus:ring-[#2E9ED8]/20 transition-all font-[family-name:var(--font-heebo)]`}
                    dir="ltr"
                  />
                  {errors.phone && (
                    <p className="text-[#6B4FA0] text-xs mt-1 pr-4">{errors.phone}</p>
                  )}
                </div>

                {/* Pain description (optional) */}
                <div className="relative">
                  <div className="absolute right-4 top-4 text-gray-500">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea
                    placeholder="ספרו בקצרה על הכאב (לא חובה)"
                    value={formData.painDescription}
                    onChange={(e) =>
                      setFormData({ ...formData, painDescription: e.target.value })
                    }
                    rows={3}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pr-12 pl-4 text-[#333333] placeholder-gray-400 focus:outline-none focus:border-[#2E9ED8]/50 focus:ring-1 focus:ring-[#2E9ED8]/20 transition-all font-[family-name:var(--font-heebo)] resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full cta-glow bg-[#2E9ED8] hover:bg-[#3CAEE5] disabled:opacity-50 text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>לקביעת ייעוץ חינם</span>
                      <ArrowLeft className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-600 text-xs">
                  הפרטים שלכם מאובטחים ולא יועברו לצד שלישי
                </p>
              </motion.form>
            )}

            {/* Step 2: Success */}
            {step === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-green-500/20 text-green-400"
                >
                  <PartyPopper className="w-10 h-10" />
                </motion.div>
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-3xl text-[#003D68]">
                  תודה, {formData.name}!
                </h3>
                <p className="text-gray-600 text-lg">
                  ד״ר נעמה תחזור אליכם בקרוב לשיחת ייעוץ
                </p>
                <div className="bg-gray-100 rounded-2xl p-4 inline-block">
                  <p className="text-gray-500 text-sm">
                    ד״ר נעמה שוורץ — כירופרקטית בכירה
                    <br />
                    טשרניחובסקי 35, בניין אסטרא, קומה 3, טיליה חיפה
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
