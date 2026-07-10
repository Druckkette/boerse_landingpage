import { BOOK_LINKS } from "../config/links";
import { purchaseContent } from "../content";
import { trackEvent } from "../lib/tracking";

const purchaseLinks = [
  { label: "Bei Amazon bestellen*", href: BOOK_LINKS.amazon, channel: "amazon", variant: "primary" },
  { label: "Bei Springer bestellen", href: BOOK_LINKS.springer, channel: "springer", variant: "secondary" }
];

export function PurchaseSection() {
  return (
    <section className="section purchase-section" id="kaufen" aria-labelledby="purchase-title">
      <div className="container purchase-layout">
        <div>
          <p className="section-kicker">{purchaseContent.kicker}</p>
          <h2 id="purchase-title">{purchaseContent.title}</h2>
          <p>{purchaseContent.description}</p>
          <ul className="purchase-facts" aria-label="Produktinformationen">
            {purchaseContent.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
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
                rel={link.channel === "amazon" ? "sponsored noreferrer" : "noreferrer"}
                aria-label={
                  link.channel === "amazon"
                    ? "Bei Amazon bestellen (Affiliate-Link)"
                    : undefined
                }
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
