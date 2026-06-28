import { IMAGE_PATHS } from "../config/links";
import { trackEvent } from "../lib/tracking";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero-cover"
        src={IMAGE_PATHS.cover}
        alt="Buchcover Börse ohne Bauchgefühl von Aljoscha Michael Groos"
        loading="eager"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Finanzbuch von Dr. Aljoscha Groos</p>
          <h1 id="hero-title">Investieren mit System statt Bauchgefühl.</h1>
          <p className="hero-subtitle">
            Ein praxisnahes Finanzbuch für Privatanleger, die klarer, ruhiger
            und regelbasierter investieren möchten.
          </p>
          <div className="hero-actions" aria-label="Primäre Aktionen">
            <a
              className="button button-primary"
              href="#kaufen"
              onClick={() => trackEvent("book_primary_cta_click", { target: "purchase" })}
            >
              Buch ansehen
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
            Keine Anlageberatung. Ein Buch über Struktur, Psychologie und
            Entscheidungsprozesse an der Börse.
          </p>
          <ul className="hero-focus" aria-label="Themenschwerpunkte">
            <li>Marktpsychologie</li>
            <li>Aktienauswahl</li>
            <li>Risikomanagement</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
