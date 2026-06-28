import { BOOK_LINKS } from "../config/links";
import { trackEvent } from "../lib/tracking";

const purchaseLinks = [
  { label: "Bei Springer ansehen", href: BOOK_LINKS.springer, channel: "springer", variant: "primary" },
  { label: "Bei Amazon ansehen", href: BOOK_LINKS.amazon, channel: "amazon", variant: "secondary" },
  { label: "Im Buchhandel suchen", href: BOOK_LINKS.bookstore, channel: "bookstore", variant: "tertiary" }
];

export function PurchaseSection() {
  return (
    <section className="section purchase-section" id="kaufen" aria-labelledby="purchase-title">
      <div className="container purchase-layout">
        <div>
          <p className="section-kicker">Buch vorbestellen</p>
          <h2 id="purchase-title">Börse ohne Bauchgefühl</h2>
          <p>Für alle, die an der Börse nicht lauter, sondern klarer werden wollen.</p>
        </div>
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
      </div>
    </section>
  );
}
