import { BOOK_LINKS, IMAGE_PATHS } from "../config/links";
import { bookProduct, bookProductDisplay, heroContent } from "../content";
import { trackEvent } from "../lib/tracking";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Regelbasiertes Börsenbuch</p>
          <p className="hero-kicker">Investieren mit System statt Emotion.</p>
          <h1 id="hero-title">Börse ohne Bauchgefühl</h1>
          <p className="hero-subtitle">{heroContent.description}</p>
          <div className="hero-actions" aria-label="Primäre Aktionen">
            <a
              className="button button-primary"
              href={BOOK_LINKS.amazon}
              target="_blank"
              rel="sponsored noreferrer"
              aria-label="Bei Amazon bestellen (Affiliate-Link)"
              onClick={() => trackEvent("book_outbound_click", { channel: "amazon_hero" })}
            >
              Bei Amazon bestellen*
            </a>
            <a
              className="button button-secondary"
              href={BOOK_LINKS.springer}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("book_primary_cta_click", { target: "springer" })}
            >
              Bei Springer bestellen
            </a>
          </div>
          <aside className="hero-product-info" aria-label="Produktinformationen zum Buch">
            <p className="hero-product-summary">
              <strong>{bookProduct.publisher}</strong>
              <span>{bookProductDisplay.pages}</span>
              <span>{bookProductDisplay.illustrations}</span>
              <span>{bookProductDisplay.bindingAndPrice}</span>
              <span>{bookProductDisplay.ebookAvailability}</span>
            </p>
            <p className="hero-product-detail">
              <span>{bookProductDisplay.illustrationDetails}</span>
              <span>ISBN {bookProduct.isbn}</span>
            </p>
          </aside>
          <ul className="hero-bullets" aria-label="Was das Buch vermittelt">
            {heroContent.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <figure className="hero-visual" aria-label="Buchcover">
          <div className="hero-book-stage">
            <img
              className="hero-cover"
              src={IMAGE_PATHS.cover}
              alt="Buchcover Börse ohne Bauchgefühl von Dr. Aljoscha Michael Groos"
              loading="eager"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
