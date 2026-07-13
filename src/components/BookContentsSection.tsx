import type { KeyboardEvent } from "react";
import { bookContents } from "../content";
import { BOOK_LINKS } from "../config/links";
import { trackEvent } from "../lib/tracking";

const toggleDetailsWithKeyboard = (event: KeyboardEvent<HTMLElement>) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  const details = event.currentTarget.parentElement as HTMLDetailsElement | null;
  if (details) details.open = !details.open;
};

export function BookContentsSection() {
  return (
    <section className="section contents-section" id="inhalte" aria-labelledby="contents-title">
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Die Inhalte</p>
          <h2 id="contents-title">8 Module für deinen Investmentprozess</h2>
          <p>
            Von Psychologie und Marktphase über Aktienauswahl und Chartanalyse
            bis zu Kauf-, Verkaufs- und Risikoregeln: Die Kapitel bauen aufeinander
            auf und führen zu einer wiederholbaren Routine.
          </p>
        </div>
        <div className="learning-modules">
          {bookContents.map((item, index) => (
            <details className="module-details" key={item.title}>
              <summary className="module-summary" onKeyDown={toggleDetailsWithKeyboard}>
                <span className="module-number">Modul {String(index + 1).padStart(2, "0")}</span>
                <span className="module-heading">
                  <span className="module-title" role="heading" aria-level={3}>
                    {item.title}
                  </span>
                  <span className="module-lead">{item.lead}</span>
                </span>
              </summary>
              <div className="module-details-content">
                <p>{item.text}</p>
              </div>
            </details>
          ))}
        </div>
        <div className="inline-purchase-cta" aria-label="Buch bestellen">
          <div>
            <strong>Ein klarer Prozess beginnt mit dem ersten Kapitel.</strong>
            <p>Das Buch direkt bei Springer oder Amazon bestellen.</p>
          </div>
          <div className="inline-purchase-actions">
            <a
              className="button button-primary"
              href={BOOK_LINKS.amazon}
              target="_blank"
              rel="sponsored noreferrer"
              aria-label="Bei Amazon bestellen (Affiliate-Link)"
              onClick={() => trackEvent("book_outbound_click", { channel: "amazon_inline" })}
            >
              Bei Amazon bestellen*
            </a>
            <a
              className="button button-secondary"
              href={BOOK_LINKS.springer}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("book_outbound_click", { channel: "springer_inline" })}
            >
              Bei Springer bestellen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
