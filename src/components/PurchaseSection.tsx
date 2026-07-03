import { BOOK_LINKS } from "../config/links";
import { affiliateDisclosure } from "../content";
import { trackEvent } from "../lib/tracking";

const purchaseLinks = [
  { label: "Bei Springer ansehen", href: BOOK_LINKS.springer, channel: "springer", variant: "primary" },
  { label: "Bei Amazon ansehen", href: BOOK_LINKS.amazon, channel: "amazon", variant: "secondary" }
];

export function PurchaseSection() {
  return (
    <section className="section purchase-section" id="kaufen" aria-labelledby="purchase-title">
      <div className="container purchase-layout">
        <div>
          <p className="section-kicker">Buch vorbestellen</p>
          <h2 id="purchase-title">Börse ohne Bauchgefühl</h2>
          <p>
            Für Anleger, die nicht den nächsten heißen Tipp suchen, sondern
            einen klaren Prozess: Markt verstehen, Aktien auswählen, Einstiege
            planen, Verkäufe umsetzen, Risiken begrenzen und aus eigenen Trades
            lernen.
          </p>
          <ul className="purchase-bullets">
            <li>Praxisnaher Leitfaden für Privatanleger</li>
            <li>Mit Checklisten, Routinen und Chartbeispielen</li>
            <li>Von Psychologie bis Risikomanagement</li>
            <li>Geeignet für die Umsetzung neben dem Beruf</li>
          </ul>
        </div>
        <div className="purchase-cta-panel">
          <div className="purchase-actions">
            {purchaseLinks.map((link) => (
              <a
                className={`button ${link.variant === "primary" ? "button-primary" : "button-secondary"}`}
                href={link.href}
                key={link.channel}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("book_outbound_click", { channel: link.channel })}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="purchase-note">Verfügbarkeit und Preise können je nach Anbieter variieren.</p>
          <p className="purchase-affiliate-note">{affiliateDisclosure}</p>
        </div>
      </div>
    </section>
  );
}
