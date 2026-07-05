import { AuthorSection } from "./components/AuthorSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LookInsideSection } from "./components/LookInsideSection";
import { ProblemSection } from "./components/ProblemSection";
import { PurchaseSection } from "./components/PurchaseSection";
import { StickyMobileCta } from "./components/StickyMobileCta";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <LookInsideSection />
        <AuthorSection />
        <PurchaseSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
