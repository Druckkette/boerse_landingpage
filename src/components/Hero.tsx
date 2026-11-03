import { BOOK_LINKS, IMAGE_PATHS } from "../config/links";
import { bookProduct, bookProductDisplay, heroContent } from "../content";
import { trackBookRetailerClick, trackEvent } from "../lib/tracking";

export function Hero() {
  const bookCover = (className: string, eager = false) => (
    <figure className={className} aria-label="Buchcover">
      <div className="hero-book-stage">
        <img
          className="hero-cover"
          src={IMAGE_PATHS.cover}
          alt="Buchcover „Börse ohne Bauchgefühl“ von Dr. Aljoscha Michael Groos"
          loading={eager ? "eager" : "lazy"}
        />
      </div>
    </figure>
  );

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-mobile-intro">
            <div>
              <p className="eyebrow">Regelbasiertes Börsenbuch</p>
              <p className="hero-kicker">Investieren mit System statt Emotion.</p>
              <h1 id="hero-title">Börse ohne Bauchgefühl</h1>
            </div>
            {bookCover("hero-mobile-cover", true)}
          </div>
          <p className="hero-subtitle">{heroContent.description}</p>
          <div className="hero-actions" aria-label="Primäre Aktionen">
            <a
              className="button button-primary"
              href={BOOK_LINKS.amazon}
              target="_blank"
              rel="sponsored noreferrer"
              aria-label="Bei Amazon bestellen (Affiliate-Link)"
              onClick={() => {
                trackEvent("book_outbound_click", { channel: "amazon_hero" });
                trackBookRetailerClick("Amazon", BOOK_LINKS.amazon);
              }}
            >
              Bei Amazon bestellen*
            </a>
            <a
              className="button button-secondary"
              href={BOOK_LINKS.springer}
              target="_blank"
              rel="sponsored noreferrer"
              aria-label="Bei Springer bestellen (Affiliate-Link)"
              onClick={() => {
                trackEvent("book_primary_cta_click", { target: "springer" });
                trackBookRetailerClick("Springer", BOOK_LINKS.springer);
              }}
            >
              Bei Springer bestellen*
            </a>
            <a className="button hero-preview-link" href="#blick-ins-buch">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 5v15M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Z" />
              </svg>
              Blick ins Buch
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
        {bookCover("hero-visual", true)}
      </div>
    </section>
  );
}
