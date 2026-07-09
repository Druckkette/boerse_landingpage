import { LEGAL_LINKS } from "../config/links";
import { affiliateDisclosure } from "../content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-notes">
          <p>
            Alle Inhalte dienen der Bildung und Information. Sie stellen keine
            Anlageberatung, keine Finanzberatung und keine Aufforderung zum Kauf
            oder Verkauf von Wertpapieren dar.
          </p>
          <p className="footer-affiliate-note">{affiliateDisclosure}</p>
        </div>
        <nav aria-label="Rechtliche Links">
          <a href={LEGAL_LINKS.imprint}>Impressum</a>
          <a href={LEGAL_LINKS.privacy}>Datenschutz</a>
          <a href={LEGAL_LINKS.contact}>Kontakt</a>
        </nav>
      </div>
    </footer>
  );
}
