import { BOOK_LINKS, IMAGE_PATHS } from "../config/links";
import { purchaseContent } from "../content";
import { trackEvent } from "../lib/tracking";

const purchaseLinks = [
  { label: "Bei Amazon bestellen*", href: BOOK_LINKS.amazon, channel: "amazon", variant: "primary" },
  { label: "Bei Springer bestellen*", href: BOOK_LINKS.springer, channel: "springer", variant: "secondary" }
];

export function PurchaseSection() {
  return (
    <section className="section purchase-section" id="kaufen" aria-labelledby="purchase-title">
      <div className="container purchase-layout">
        <figure className="purchase-cover">
          <img
            src={IMAGE_PATHS.cover}
            alt="Buchcover „Börse ohne Bauchgefühl“ von Dr. Aljoscha Michael Groos"
            loading="lazy"
          />
        </figure>
        <div className="purchase-copy">
          <p className="section-kicker">{purchaseContent.kicker}</p>
          <h2 id="purchase-title">{purchaseContent.title}</h2>
          <p>{purchaseContent.description}</p>
        </div>
        <ul className="purchase-facts" aria-label="Produktinformationen">
          {purchaseContent.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        <div className="purchase-cta-panel">
          <div className="purchase-actions">
            {purchaseLinks.map((link) => (
              <a
                className={`button ${link.variant === "primary" ? "button-primary" : "button-secondary"}`}
                href={link.href}
                key={link.channel}
                target="_blank"
                rel="sponsored noreferrer"
                aria-label={`Bei ${link.channel === "amazon" ? "Amazon" : "Springer"} bestellen (Affiliate-Link)`}
                onClick={() => trackEvent("book_outbound_click", { channel: link.channel })}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
