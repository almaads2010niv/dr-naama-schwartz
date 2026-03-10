import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import SocialProof from "@/components/SocialProof";
import VossBlock from "@/components/VossBlock";
import FacilitiesGallery from "@/components/FacilitiesGallery";
import ComparisonTable from "@/components/ComparisonTable";
import PricingTable from "@/components/PricingTable";
import SavingsCalculator from "@/components/SavingsCalculator";
import Testimonials from "@/components/Testimonials";
import GuiltRelease from "@/components/GuiltRelease";
import RiskReversal from "@/components/RiskReversal";
import HowItWorks from "@/components/HowItWorks";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import NotificationQueue from "@/components/NotificationQueue";
import ExitIntent from "@/components/ExitIntent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <main>
      {/* Sticky CTA Bar */}
      <StickyBar />

      {/* Unified Notification Queue (FOMO + Active Viewers) */}
      <NotificationQueue />

      {/* Exit Intent Popup */}
      <ExitIntent />

      {/* Accessibility Widget */}
      <AccessibilityWidget />

      {/* Cookie Consent */}
      <CookieConsent />

      {/* 1. Hero — הכאב נגמר */}
      <Hero />

      {/* 1.5. Bio & Credentials */}
      <VideoSection />

      {/* 2. Social Proof — מספרים */}
      <SocialProof />

      {/* 3. Voss — שאלות פסיכולוגיות */}
      <VossBlock />

      {/* 4. Services Grid */}
      <FacilitiesGallery />

      {/* 4.5. Comparison Table — שיטות טיפול */}
      <ComparisonTable />

      {/* 5. Testimonials — מטופלים משתפים */}
      <Testimonials />

      {/* 5.5. Guilt Release */}
      <GuiltRelease />

      {/* 6. Value Comparison */}
      <PricingTable />

      {/* 7. Pain-Free Days Calculator */}
      <SavingsCalculator />

      {/* 8. Risk Reversal */}
      <RiskReversal />

      {/* 8.5. How It Works — 3 שלבים */}
      <HowItWorks />

      {/* 9. Checkout — Lead Capture */}
      <CheckoutForm />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
