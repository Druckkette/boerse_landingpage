import { bookContents } from "../content";
import { BOOK_LINKS } from "../config/links";
import { trackEvent } from "../lib/tracking";

export function LookInsideSection() {
  return (
    <section className="section contents-section" id="inhalte" aria-labelledby="contents-title">
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Der Fahrplan</p>
          <h2 id="contents-title">8 Module für deinen Investmentprozess</h2>
          <p>
            Von Psychologie und Marktphase über Aktienauswahl und Chartanalyse
            bis zu Kauf-, Verkaufs- und Risikoregeln: Die Kapitel bauen aufeinander
            auf und führen zu einer wiederholbaren Routine.
          </p>
        </div>
        <div className="learning-modules">
          {bookContents.map((item, index) => (
            <article className="learning-module" key={item.title}>
              <span>Modul {String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p className="learning-module-lead">{item.lead}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="inline-purchase-cta" aria-label="Buch kaufen">
          <div>
            <strong>Ein klarer Prozess beginnt mit dem ersten Kapitel.</strong>
            <p>Bestelle das Buch direkt bei Springer oder Amazon.</p>
          </div>
          <div className="inline-purchase-actions">
            <a
              className="button button-primary"
              href={BOOK_LINKS.springer}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("book_outbound_click", { channel: "springer_inline" })}
            >
              Bei Springer bestellen
            </a>
            <a
              className="button button-secondary"
              href={BOOK_LINKS.amazon}
              target="_blank"
              rel="sponsored noreferrer"
              onClick={() => trackEvent("book_outbound_click", { channel: "amazon_inline" })}
            >
              Bei Amazon bestellen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
