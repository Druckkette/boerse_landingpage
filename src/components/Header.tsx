import { trackEvent } from "../lib/tracking";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Börse ohne Bauchgefühl Start">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>Börse ohne Bauchgefühl</span>
        </a>
        <nav className="nav-links" aria-label="Hauptnavigation">
          <a href="#prozess">Prozess</a>
          <a href="#autor">Autor</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a
          className="header-cta"
          href="#kaufen"
          onClick={() => trackEvent("book_header_cta_click", { target: "purchase" })}
        >
          Buch ansehen
        </a>
      </div>
    </header>
  );
}
