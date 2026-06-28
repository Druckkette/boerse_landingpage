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
            <strong>7 Regeln gegen emotionale Börsenfehler</strong>
            <ul>
              <li>Plan vor Order</li>
              <li>Risiko vor Rendite</li>
              <li>Regel vor Gefühl</li>
            </ul>
          </div>
        </div>
        <div className="lead-copy">
          <p className="section-kicker">Kostenlose Checkliste</p>
          <h2 id="lead-title">7 Regeln gegen emotionale Börsenfehler</h2>
          <p>
            Erhalte eine kompakte Checkliste, mit der du vor jedem Investment
            prüfen kannst, ob du nach Plan handelst — oder aus dem Bauch heraus.
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
