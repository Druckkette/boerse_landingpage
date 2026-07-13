import { useEffect, useRef, useState } from "react";
import { trackEvent } from "../lib/tracking";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLElement>(null);

  const closeMenu = (restoreFocus = false) => {
    setIsMenuOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("mobile-menu-open");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
      if (event.key !== "Tab" || !mobileNavigationRef.current) return;

      const focusableElements = Array.from(
        mobileNavigationRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("mobile-menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const navigationLinks = [
    { href: "#inhalte", label: "Inhalte" },
    { href: "#autor", label: "Autor" },
    { href: "#kaufen", label: "Buch bestellen" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Börse ohne Bauchgefühl Start">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>Börse ohne Bauchgefühl</span>
        </a>
        <nav className="nav-links" aria-label="Hauptnavigation">
          {navigationLinks.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>
        <a
          className="header-cta"
          href="#kaufen"
          onClick={() => trackEvent("book_header_cta_click", { target: "purchase" })}
        >
          Buch bestellen
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Navigation öffnen"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(true)}
          ref={menuButtonRef}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div
        className={`mobile-menu-layer ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <button
          className="mobile-menu-backdrop"
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => closeMenu(true)}
        />
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Mobile Navigation"
          ref={mobileNavigationRef}
        >
          <div className="mobile-navigation-head">
            <span>Navigation</span>
            <button
              className="menu-close-button"
              type="button"
              aria-label="Navigation schließen"
              onClick={() => closeMenu(true)}
              ref={closeButtonRef}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          {navigationLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={() => closeMenu()}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
