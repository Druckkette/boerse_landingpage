import { FormEvent, useState } from "react";
import { NEWSLETTER_FORM_ENDPOINT } from "../config/links";
import { trackEvent } from "../lib/tracking";

export function LeadMagnetSection() {
  const [status, setStatus] = useState("");
  const isNewsletterReady = Boolean(NEWSLETTER_FORM_ENDPOINT);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    trackEvent("checklist_form_submit", { configured: isNewsletterReady });

    if (!isNewsletterReady) {
      event.preventDefault();
      setStatus(
        "Die Checkliste wird vor dem Kampagnenstart freigeschaltet. Der Download ist noch nicht aktiv."
      );
    }
  }

  return (
    <section className="section lead-section" id="checkliste" aria-labelledby="lead-title">
      <div className="container lead-layout">
        <div className="lead-preview" aria-hidden="true">
          <div className="pdf-mockup">
            <span>Checkliste</span>
            <strong>12-Punkte-Kaufcheckliste</strong>
            <p>Prüfe vor jeder Order:</p>
            <ul>
              <li>Marktphase</li>
              <li>Relative Stärke</li>
              <li>Kaufzone</li>
              <li>Stopp & Risiko</li>
              <li>Quartalszahlen</li>
              <li>Verkaufsplan</li>
            </ul>
          </div>
        </div>
        <div className="lead-copy">
          <p className="section-kicker">Kostenlose Checkliste</p>
          <h2 id="lead-title">Die 12-Punkte-Kaufcheckliste gegen Bauchgefühl-Trades</h2>
          <p>
            Bevor du eine Aktie kaufst, sollten Marktphase, Setup, Risiko,
            Stopp, Positionsgröße und nächster Ausstieg klar sein. Die
            Checkliste hilft dir, genau diese Punkte vor der Order zu prüfen -
            damit aus einem spontanen Impuls ein bewusster Trade wird.
          </p>
          <form
            className="lead-form"
            action={NEWSLETTER_FORM_ENDPOINT || "#checkliste"}
            method="post"
            onSubmit={handleSubmit}
          >
            {/* TODO NEWSLETTER: action, Feldnamen und Consent-Text an Mailchimp, Brevo, ConvertKit o. ae. anpassen. */}
            <label htmlFor="email">E-Mail-Adresse</label>
            <div className="form-row">
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="deine@email.de"
                required={isNewsletterReady}
              />
              <button className="button button-primary" type="submit">
                {isNewsletterReady ? "Checkliste sichern" : "Download bald verfügbar"}
              </button>
            </div>
            <label className="consent-row">
              <input name="consent" type="checkbox" required={isNewsletterReady} />
              <span>
                Ich möchte die Checkliste und gelegentliche E-Mails zum Buch
                erhalten. Abmeldung jederzeit möglich.
              </span>
            </label>
            <p className="form-note">
              Kein Spam. Deine Daten werden nur für den Versand der Checkliste
              und begleitender Buchinformationen genutzt.
            </p>
            {status ? (
              <p className="form-status" role="status">
                {status}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
