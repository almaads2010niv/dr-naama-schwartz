# Project Memory — ד״ר נעמה שוורץ | דף נחיתה

## Project Overview
- **Client**: ד״ר נעמה שוורץ — כירופרקטית בכירה
- **Purpose**: דף נחיתה לייעוץ טלפוני ראשון חינם
- **Target Audience**: אנשים הסובלים מכאבי גב, צוואר, מיגרנות — אזור חיפה והצפון
- **Goal**: לגרום למבקרים להשאיר פרטים לקביעת ייעוץ טלפוני חינם (10 דקות)
- **Address**: טשרניחובסקי 35, בניין אסטרא, קומה 3, טיליה חיפה
- **Phone**: 055-7213529 | 04-8101604

## Key Offer Points
- ייעוץ טלפוני ראשון — חינם
- 20 מקומות בשבוע בלבד
- ללא התחייבות
- 20+ שנות ניסיון
- שיטה ייחודית: גוף + נפש — טיפול בשורש הבעיה

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (`@theme inline`)
- Framer Motion animations
- Lucide React icons
- Hebrew RTL layout
- Google Fonts: Heebo (display) + Assistant (body)
- Supabase for lead storage + status tracking
- @vercel/analytics for web analytics

## Color Palette (Light Blue Theme)
- **Primary Blue**: `#2E9ED8`
- **Dark Blue**: `#1E7BA8`
- **Light Blue**: `#3CAEE5`
- **Purple Accent**: `#6B4FA0`
- **Dark Navy (text)**: `#003D68`
- **Body Text**: `#333333`
- **Background**: `#FFFFFF` (white)
- **Off-White**: `#FAF8F5`
- **Light Gray**: `#F0EDE8`
- **Gradient text**: blue `#2E9ED8` → purple `#6B4FA0`

## Important Files
- `src/app/page.tsx` — Main page composition (funnel order)
- `src/app/globals.css` — Theme colors, animations, custom scrollbar
- `src/components/Hero.tsx` — Hero with main image (NAAMA MAIN.png), logo, countdown, CTA
- `src/components/VideoSection.tsx` — Bio/credentials + MASSAGE.jpg treatment photo
- `src/components/FacilitiesGallery.tsx` — Services grid (back pain, neck, migraines, rehab, anxiety)
- `src/components/CheckoutForm.tsx` — 2-step lead capture (name, phone, pain description)
- `src/components/ComparisonTable.tsx` — Chiropractic vs alternatives comparison
- `src/components/PricingTable.tsx` — Value comparison
- `src/components/SavingsCalculator.tsx` — Pain-free days calculator
- `src/components/RiskReversal.tsx` — Trust/guarantee section
- `src/components/Countdown.tsx` — Countdown timer (target: 2026-03-31)
- `src/components/SpotsCounter.tsx` — Live remaining spots (20 total, min 3 shown)
- `src/components/NotificationQueue.tsx` — Unified FOMO + Active Viewers
- `src/components/StickyBar.tsx` — Sticky top bar with logo + CTA
- `src/components/Footer.tsx` — Footer with logo + contact info
- `src/lib/supabase.ts` — Supabase client
- `.env.local` — Supabase credentials (DO NOT COMMIT)

## Images
- `public/images/NAAMA MAIN.png` — תמונה ראשית של ד״ר נעמה (Hero background with fade)
- `public/images/LOGO NAAMA.png` — לוגו (Hero, StickyBar, Footer)
- `public/images/MASSAGE.jpg` — תמונת טיפול (VideoSection)

## Page Funnel Order
1. Hero (main image + logo + badge + countdown + CTA)
2. VideoSection (bio, credentials, treatment photo)
3. SocialProof (numbers)
4. VossBlock (Voss psychology questions)
5. FacilitiesGallery (services grid)
6. ComparisonTable (chiropractic vs alternatives)
7. Testimonials
8. GuiltRelease
9. PricingTable (value comparison)
10. SavingsCalculator (pain-free days)
11. RiskReversal
12. HowItWorks (3 steps)
13. CheckoutForm (lead capture)
14. Footer

Overlay components: StickyBar, NotificationQueue, ExitIntent, AccessibilityWidget, CookieConsent

## Checkout Flow
1. **Step 1**: User fills name + phone + pain description → POST /api/checkout → saves to Supabase
2. **Step 2**: Success screen with personalized message + clinic address/hours
3. No payment — pure lead capture for free consultation

## API Routes
- `POST /api/checkout` — Insert lead to Supabase (name, phone, pain_description, source, status="new")
- `GET /api/spots` — Available spots (20 total, min 3 remaining always shown)
- `GET /api/leads/recent` — Last 10 leads for social proof (first names only)
- `PATCH /api/checkout/status` — Update lead status (contacted, scheduled, completed)

## Supabase
- URL: https://aqrevfxxofwgqmkmzdjb.supabase.co
- Table: `leads` (id, name, phone, email, pain_description, source, status, created_at)
- Status values: `new` → `contacted` → `scheduled` → `completed`
- RLS enabled: anonymous insert + select + update

## Deployment
- GitHub: https://github.com/almaads2010niv/dr-naama-schwartz
- Vercel auto-deploys on push to `main`
- Environment variables set on Vercel: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY

## User Preferences
- Niv (the user) prefers Hebrew interface
- GitHub user: alma.ads2010@gmail.com / almaads2010niv
- Design approach: clean, light, professional — not generic AI aesthetics
- Mobile-first (70%+ mobile traffic expected)

## Z-Index Layering
- Noise overlay (globals.css `.noise-overlay`): z-9999 — pointer-events: none
- AccessibilityWidget panel: z-[10020]
- CookieConsent: z-[10010]
- AccessibilityWidget button: z-[10005]
- All other overlays (StickyBar, NotificationQueue, ExitIntent): z-50
- Rule: any interactive overlay MUST be above z-9999 to be clickable over noise texture

## Current State (Session 8)
- ✅ Landing page fully built and deployed
- ✅ Color scheme updated: dark purple → light blue/white theme
- ✅ Images integrated: NAAMA MAIN.png (Hero), LOGO NAAMA.png (Hero/StickyBar/Footer), MASSAGE.jpg (VideoSection)
- ✅ Supabase leads table with status tracking
- ✅ Vercel Web Analytics active
- ✅ All 23 components updated with new color palette
- ✅ Build passes successfully
- ✅ Pushed to GitHub (commit 0b84a1e)
- Last updated: Session 8
