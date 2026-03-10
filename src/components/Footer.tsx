"use client";

import TermsModal from "./TermsModal";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        {/* Logo text */}
        <div className="opacity-50">
          <span className="font-[family-name:var(--font-heebo)] font-black text-xl text-white">ד״ר נעמה שוורץ</span>
          <span className="text-gray-500 text-sm block">כירופרקטית בכירה</span>
        </div>

        {/* Disclaimer */}
        <p className="text-gray-500 text-sm leading-relaxed">
          ייעוץ טלפוני ראשון חינם | ללא התחייבות | כפוף לזמינות
        </p>

        {/* Terms link */}
        <TermsModal />

        {/* Contact & Address */}
        <div className="text-gray-600 text-xs space-y-1">
          <p>טשרניחובסקי 35, בניין אסטרא, קומה 3, טיליה חיפה</p>
          <p dir="ltr">055-7213529 | 04-8101604</p>
        </div>

        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} ד״ר נעמה שוורץ. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
