import { AudienceSection } from "./components/AudienceSection";
import { AuthorSection } from "./components/AuthorSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LeadMagnetSection } from "./components/LeadMagnetSection";
import { LookInsideSection } from "./components/LookInsideSection";
import { ProblemSection } from "./components/ProblemSection";
import { ProcessSection } from "./components/ProcessSection";
import { QuickPurchaseBar } from "./components/QuickPurchaseBar";
import { PurchaseSection } from "./components/PurchaseSection";
import { StickyMobileCta } from "./components/StickyMobileCta";
import { TakeawaysSection } from "./components/TakeawaysSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickPurchaseBar />
        <ProblemSection />
        <ProcessSection />
        <LookInsideSection />
        <AudienceSection />
        <TakeawaysSection />
        <AuthorSection />
        <LeadMagnetSection />
        <PurchaseSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
