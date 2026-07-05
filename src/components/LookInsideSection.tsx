import { bookContents, lookInsideItems } from "../content";
import { BOOK_LINKS } from "../config/links";
import { trackEvent } from "../lib/tracking";

export function LookInsideSection() {
  return (
    <>
      <section className="section contents-section" id="inhalte" aria-labelledby="contents-title">
        <div className="container">
          <div className="section-heading narrow">
            <p className="section-kicker">Inhalte des Buchs</p>
            <h2 id="contents-title">Das lernst du im Buch</h2>
            <p>
              Der rote Faden ist bewusst einfach: erst Markt und eigenes
              Verhalten verstehen, dann Aktien filtern, anschließend Einstieg,
              Ausstieg und Risiko planen und am Ende aus den eigenen Trades
              lernen.
            </p>
          </div>
          <div className="learning-modules">
            {bookContents.map((item, index) => (
              <article className="learning-module" key={item.title}>
                <span>Modul {String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="inline-purchase-cta" aria-label="Buch kaufen">
            <div>
              <strong>Bereit für einen klareren Investmentprozess?</strong>
              <p>Der direkte Einstieg zum Buch, bevor die Details kommen.</p>
            </div>
            <div className="inline-purchase-actions">
              <a
                className="button button-primary"
                href={BOOK_LINKS.springer}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("book_outbound_click", { channel: "springer_inline" })}
              >
                Bei Springer ansehen
              </a>
              <a
                className="button button-secondary"
                href={BOOK_LINKS.amazon}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("book_outbound_click", { channel: "amazon_inline" })}
              >
                Bei Amazon ansehen
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section look-section"
        id="blick-ins-buch"
        aria-labelledby="look-title"
      >
        <div className="container">
          <div className="section-heading narrow">
            <p className="section-kicker">Ein Blick ins Buch</p>
            <h2 id="look-title">Konkrete Regeln statt abstrakter Börsenweisheiten.</h2>
            <p>
              Das Buch bleibt nicht bei allgemeinen Ratschlägen stehen. Es
              übersetzt Marktpsychologie, Aktienanalyse und Risikomanagement in
              Checklisten, Regeln und wiederholbare Routinen.
            </p>
          </div>
          <div className="look-grid">
            {lookInsideItems.map((item) => (
              <article className="look-card" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
