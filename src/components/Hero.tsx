import { IMAGE_PATHS } from "../config/links";
import { trackEvent } from "../lib/tracking";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Börsenbuch von Dr. Aljoscha Michael Groos</p>
          <h1 id="hero-title">
            <span className="hero-title-desktop">
              Börse ohne Bauchgefühl: Investieren mit System statt Emotion.
            </span>
            <span className="hero-title-mobile">Investieren mit System statt Emotion.</span>
          </h1>
          <p className="hero-subtitle">
            Für Anleger, die neben Beruf und Alltag mit festen Routinen arbeiten
            wollen: Markt prüfen, Watchlist aktualisieren, Kaufplan vorbereiten
            und erst handeln, wenn Regeln und Risiko zusammenpassen.
          </p>
          <ul className="hero-bullets" aria-label="Was das Buch vermittelt">
            <li>Marktphasen erkennen, bevor du blind kaufst</li>
            <li>Aktien strukturiert filtern statt Tipps hinterherlaufen</li>
            <li>Einstiege, Stopps und Verkäufe vor dem Kauf planen</li>
            <li>Mit Checklisten und Routinen auch neben dem Beruf umsetzbar</li>
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
              href="#kaufen"
              onClick={() => trackEvent("book_primary_cta_click", { target: "purchase" })}
            >
              Buch vorbestellen
            </a>
            <a
              className="button button-secondary"
              href="#checkliste"
              onClick={() =>
                trackEvent("checklist_secondary_cta_click", { target: "lead_magnet" })
              }
            >
              Kostenlose Checkliste sichern
            </a>
          </div>
          <p className="hero-note">
            Keine Anlageberatung. Kein Renditeversprechen. Ein Buch über
            Struktur, Disziplin und bessere Entscheidungsprozesse an der Börse.
          </p>
          <p className="hero-trust">
            Springer-Fachbuch · Praxisnah · Regelbasiert · Für Privatanleger
          </p>
          <ul className="hero-focus" aria-label="Themenschwerpunkte">
            <li>Psychologie</li>
            <li>Marktphase</li>
            <li>Aktienauswahl</li>
            <li>Chartanalyse</li>
            <li>Risikomanagement</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
