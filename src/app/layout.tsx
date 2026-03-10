import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ד\"ר נעמה שוורץ | כירופרקטית בכירה — ייעוץ טלפוני חינם",
  description:
    "ד\"ר נעמה שוורץ, כירופרקטית בכירה עם 20+ שנות ניסיון. שיטה ייחודית לטיפול בכאב בשילוב גוף ונפש. קבעו ייעוץ טלפוני ראשון חינם.",
  openGraph: {
    title: "ד\"ר נעמה שוורץ | כירופרקטית בכירה — ייעוץ טלפוני חינם",
    description:
      "שיטה ייחודית לטיפול בכאב בשילוב גוף ונפש. 20+ שנות ניסיון. ייעוץ טלפוני ראשון חינם — 20 מקומות בשבוע בלבד!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} ${assistant.variable} font-[family-name:var(--font-assistant)] antialiased`}
      >
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
