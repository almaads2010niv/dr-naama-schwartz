"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "דפנה",
    text: "סבלתי שנה שלמה מכאב גב תחתון עם דיסק בולט והקרנה לרגל. עברתי פיזיותרפיה פרטית במשך שנה בלי שיפור. אחרי שלושה שבועות אצל ד״ר נעמה — לא היו לי כאבים בכלל! כבר יותר משלוש שנים בלי כאב, חזרתי לספורט ולריצה.",
    stars: 5,
    color: "from-[#2E9ED8]/20",
    condition: "כאב גב תחתון, דיסק בולט",
  },
  {
    name: "שושן שמעון",
    text: "אובחנתי עם בעיה קשה בעמוד שדרה צווארי עם בליטות קשות שלוחצות על חוט השדרה. הומלץ לי ניתוח מסוכן. בזכות ד״ר נעמה אני מתפקד היטב ונמנע מניתוח — בלי תרופות כמעט.",
    stars: 5,
    color: "from-[#6B4FA0]/20",
    condition: "עמוד שדרה צווארי, נמנע מניתוח",
  },
  {
    name: "אליאור",
    text: "סבלתי מכאבי רגליים וגב במשך שנים. עברתי מרפאת כאב בלי שיפור משמעותי. ד״ר נעמה עזרה לי להבין שאני הרופא הכי טוב של עצמי. היום אני ללא כאבים וחזרתי לפעילות גופנית מלאה.",
    stars: 5,
    color: "from-[#2E9ED8]/20",
    condition: "כאבי רגליים וגב כרוניים",
  },
  {
    name: "אוליסיה מנדלבוץ",
    text: "מהרגע שהתחלתי טיפולים אצל נעמה, הרגשתי שיפור משמעותי בכל התחומים של החיים שלי. שחררתי שכבות של פחד וחוסר ביטחון שליוו אותי מילדותי.",
    stars: 5,
    color: "from-[#6B4FA0]/20",
    condition: "טראומה רגשית ופיזית",
  },
  {
    name: "גיל",
    text: "גיליתי עומקים בתוך עצמי שלא דמיינתי שאגיע אליהם בחיים. כאבי הגב נעלמו, אבל מה שקיבלתי הוא הרבה יותר — הבנה עמוקה של מה הגוף שלי באמת צריך.",
    stars: 5,
    color: "from-[#2E9ED8]/20",
    condition: "כאבי גב",
  },
  {
    name: "אסתר",
    text: "כמנהלת מרפאת פיזיותרפיה, חששתי מטיפול כירופרקטי אגרסיבי. ד״ר נעמה הפתיעה אותי בגישה העדינה. כבר 10 שנים שהכאבים נעלמו — ובמקרה הנדיר שמשהו חוזר, טיפול אחד מסדר הכל.",
    stars: 5,
    color: "from-[#6B4FA0]/20",
    condition: "שינויים בעמוד שדרה צווארי, 10 שנות טיפול",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#FFFFFF]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2E9ED8] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            מטופלים מספרים
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            עדויות <span className="text-gradient-red">אמיתיות</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#FBBC04] fill-[#FBBC04]"
                />
              ))}
            </div>
            <span className="text-gray-600 text-sm">מתוך אתר drnaama.co.il</span>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-gradient-to-br ${t.color} to-[#FFFFFF]/50 border border-gray-200 rounded-3xl p-7 hover:border-[#2E9ED8]/20 transition-all duration-500 group ${
                i === 1 ? "lg:translate-y-8" : ""
              } ${i === 3 ? "lg:translate-y-[-16px]" : ""}`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#2E9ED8]/20 mb-4 group-hover:text-[#2E9ED8]/40 transition-colors" />

              {/* Condition badge */}
              <div className="inline-block bg-[#2E9ED8]/10 border border-[#2E9ED8]/20 rounded-full px-3 py-1 mb-3">
                <span className="text-[#6B4FA0] text-xs font-[family-name:var(--font-heebo)] font-semibold">
                  {t.condition}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-[#FBBC04] fill-[#FBBC04]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-500 leading-relaxed mb-5 text-[15px]">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#2E9ED8]/20 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-heebo)] font-bold text-sm text-[#2E9ED8]">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heebo)] font-bold text-[#003D68] text-sm">
                    {t.name}
                  </p>
                  <p className="text-gray-600 text-xs">מטופל/ת</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
