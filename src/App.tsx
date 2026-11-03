import { AuthorSection } from "./components/AuthorSection";
import { BookContentsSection } from "./components/BookContentsSection";
import { BookPreviewSection } from "./components/BookPreviewSection";
import { ConsentBanner } from "./components/ConsentBanner";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
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
        <BookContentsSection />
        <BookPreviewSection />
        <AuthorSection />
        <PurchaseSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyMobileCta />
      <ConsentBanner />
    </>
  );
}
