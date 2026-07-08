import { BOOK_LINKS, IMAGE_PATHS } from "../config/links";
import { trackEvent } from "../lib/tracking";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Börsenbuch von Dr. Aljoscha Michael Groos</p>
          <h1 id="hero-title">Börse ohne Bauchgefühl</h1>
          <p className="hero-tagline">Investieren mit System statt Emotion.</p>
          <p className="hero-subtitle">
            Börse ohne Bauchgefühl zeigt dir, wie du Aktien systematisch
            auswählst, Einstiege planst, Verluste begrenzt, Gewinne sicherst
            und aus jedem Trade besser wirst – mit klaren Regeln statt
            spontanen Entscheidungen.
          </p>
          <ul className="hero-bullets" aria-label="Was das Buch vermittelt">
            <li>Marktphasen erkennen, bevor du blind kaufst</li>
            <li>Aktien strukturiert filtern statt Tipps hinterherlaufen</li>
            <li>Einstiege, Stopps und Verkäufe vor dem Kauf planen</li>
          </ul>
        </div>
        <figure className="hero-visual" aria-label="Buchcover">
          <img
            className="hero-cover"
            src={IMAGE_PATHS.cover}
            alt="Buchcover Börse ohne Bauchgefühl von Dr. Aljoscha Michael Groos"
            loading="eager"
          />
        </figure>
        <div className="hero-conversion">
          <div className="hero-actions" aria-label="Primäre Aktionen">
            <a
              className="button button-primary"
              href={BOOK_LINKS.springer}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("book_primary_cta_click", { target: "springer" })}
            >
              Bei Springer vorbestellen
            </a>
            <a
              className="button button-secondary"
              href={BOOK_LINKS.amazon}
              target="_blank"
              rel="sponsored noreferrer"
              onClick={() => trackEvent("book_outbound_click", { channel: "amazon_hero" })}
            >
              Bei Amazon ansehen
            </a>
          </div>
          <p className="hero-trust">
            Springer-Fachbuch · Praxisnah · Regelbasiert · Für Privatanleger
          </p>
        </div>
      </div>
    </section>
  );
}
