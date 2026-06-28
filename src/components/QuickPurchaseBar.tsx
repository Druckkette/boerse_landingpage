import { trackEvent } from "../lib/tracking";

export function QuickPurchaseBar() {
  return (
    <section className="quick-purchase" aria-label="Buch vorbestellen">
      <div className="container quick-purchase-inner">
        <div>
          <strong>Börse ohne Bauchgefühl</strong>
          <span>Für klare Regeln statt spontane Börsenentscheidungen.</span>
        </div>
        <a
          className="button button-primary"
          href="#kaufen"
          onClick={() => trackEvent("book_quick_purchase_click", { target: "purchase" })}
        >
          Buch vorbestellen
        </a>
      </div>
    </section>
  );
}
