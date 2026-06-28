import { LEGAL_LINKS } from "../config/links";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Keine Anlageberatung. Investieren ist mit Risiken verbunden.</p>
        <nav aria-label="Rechtliche Links">
          <a href={LEGAL_LINKS.imprint}>Impressum</a>
          <a href={LEGAL_LINKS.privacy}>Datenschutz</a>
          <a href={LEGAL_LINKS.contact}>Kontakt</a>
        </nav>
      </div>
    </footer>
  );
}
