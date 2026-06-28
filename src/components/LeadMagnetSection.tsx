import { FormEvent, useState } from "react";
import { NEWSLETTER_FORM_ENDPOINT } from "../config/links";
import { trackEvent } from "../lib/tracking";

export function LeadMagnetSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    trackEvent("checklist_form_submit", { configured: Boolean(NEWSLETTER_FORM_ENDPOINT) });

    if (!NEWSLETTER_FORM_ENDPOINT) {
      event.preventDefault();
      setStatus(
        "Danke. Die Checkliste-Anbindung ist vorbereitet und kann jetzt mit deinem Newsletter-Tool verbunden werden."
      );
    }
  }

  return (
    <section className="section lead-section" id="checkliste" aria-labelledby="lead-title">
      <div className="container lead-layout">
        <div className="lead-copy">
          <p className="section-kicker">Kostenlose Checkliste</p>
          <h2 id="lead-title">7 Regeln gegen emotionale Börsenfehler</h2>
          <p>
            Lade dir die kompakte Checkliste herunter und prüfe vor deinem
            nächsten Investment, ob du wirklich nach Plan handelst — oder aus
            dem Bauch heraus.
          </p>
        </div>
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
              required
            />
            <button className="button button-primary" type="submit">
              Checkliste sichern
            </button>
          </div>
          <p className="form-note">Du kannst dich jederzeit wieder abmelden.</p>
          {status ? (
            <p className="form-status" role="status">
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
