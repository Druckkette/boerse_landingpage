import { trackEvent } from "../lib/tracking";
import { useEffect, useState } from "react";
import { bookProduct } from "../content";

export function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const blockingAreas = document.querySelectorAll("#kaufen, #faq, footer");
      const isBlockingVisible = Array.from(blockingAreas).some((area) => {
        const bounds = area.getBoundingClientRect();
        return bounds.top < window.innerHeight - 48 && bounds.bottom > 48;
      });

      setIsVisible(window.scrollY > 360 && !isBlockingVisible);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <aside
      className={`mobile-sticky-cta ${isVisible ? "is-visible" : ""}`}
      aria-label="Buch bestellen"
    >
      <span>Buch bestellen · {bookProduct.price}</span>
      <a
        href="#kaufen"
        onClick={() => trackEvent("book_mobile_sticky_click", { target: "purchase" })}
      >
        Bestellen
      </a>
    </aside>
  );
}
