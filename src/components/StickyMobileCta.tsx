import { trackEvent } from "../lib/tracking";
import { useEffect, useState } from "react";

export function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const blockingArea = document.querySelector("#kaufen, footer");
      const isBlockingVisible = blockingArea
        ? blockingArea.getBoundingClientRect().top < window.innerHeight - 80
        : false;

      setIsVisible(window.scrollY > 420 && !isBlockingVisible);
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
      <span>Börse ohne Bauchgefühl</span>
      <a
        href="#kaufen"
        onClick={() => trackEvent("book_mobile_sticky_click", { target: "purchase" })}
      >
        Buch bestellen
      </a>
    </aside>
  );
}
