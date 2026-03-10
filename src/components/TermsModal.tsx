"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function TermsModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-gray-500 hover:text-[#7C3AED] underline underline-offset-4 transition-colors cursor-pointer text-sm"
      >
        תנאי השירות
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
            dir="rtl"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-[#1A1525] border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto z-10"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <h2 className="font-[family-name:var(--font-heebo)] font-black text-2xl text-white mb-6">
                תנאי שירות — ייעוץ טלפוני חינם
              </h2>
              <h3 className="font-[family-name:var(--font-heebo)] font-bold text-lg text-gray-300 mb-6">
                ד״ר נעמה שוורץ — כירופרקטית בכירה
              </h3>

              <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
                <div>
                  <h4 className="text-white font-bold mb-2">1. מהות השירות</h4>
                  <p>ייעוץ טלפוני ראשוני חינם עם ד״ר נעמה שוורץ, בן 10 דקות לערך. הייעוץ כולל הערכה ראשונית של מצב המטופל/ת והמלצה על מסלול טיפולי מתאים.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">2. זמינות</h4>
                  <p>הייעוץ מוגבל ל-20 מקומות בשבוע בלבד, בכפוף לזמינות. ד״ר נעמה תחזור אליכם בתוך 1-2 ימי עסקים.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">3. ללא התחייבות</h4>
                  <p>הייעוץ הטלפוני אינו מחייב את המטופל/ת להמשך טיפולים. ניתן להחליט בהתאם לשיחה אם להמשיך לטיפול במרפאה.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">4. פרטיות</h4>
                  <p>הפרטים שנמסרים באתר (שם, טלפון, תיאור כאב) ישמשו אך ורק לצורך יצירת קשר לייעוץ. הפרטים לא יועברו לצד שלישי ולא ישמשו לצרכי שיווק ללא הסכמה.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">5. אחריות</h4>
                  <p>הייעוץ הטלפוני הוא בגדר הערכה ראשונית בלבד ואינו מהווה תחליף לבדיקה פיזית מקיפה. אבחון וטיפול יתבצעו במרפאה בלבד.</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">6. מיקום המרפאה</h4>
                  <p>טשרניחובסקי 35, בניין אסטרא, קומה 3, טיליה חיפה.</p>
                  <p>טלפון: 055-7213529 | 04-8101604</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2">7. תנאים כלליים</h4>
                  <p>ט.ל.ח. ד״ר נעמה שוורץ רשאית לשנות את תנאי ההטבה בכל עת.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
