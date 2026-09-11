import { useEffect, useState } from "react";
import { LEGAL_LINKS } from "../config/links";
import {
  getMarketingConsent,
  onOpenConsentSettings,
  saveMarketingConsent,
  type MarketingConsent
} from "../lib/consent";
import { initializeMetaPixel, revokeMetaPixelConsent } from "../lib/metaPixel";

export function ConsentBanner() {
  const [consent, setConsent] = useState<MarketingConsent | null>(() =>
    getMarketingConsent()
  );
  const [isOpen, setIsOpen] = useState(() => consent === null);

  useEffect(() => {
    if (consent === "granted") {
      initializeMetaPixel();
    } else if (consent === "denied") {
      revokeMetaPixelConsent();
    }
  }, [consent]);

  useEffect(() => onOpenConsentSettings(() => setIsOpen(true)), []);

  const selectConsent = (selection: MarketingConsent) => {
    saveMarketingConsent(selection);
    setConsent(selection);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <section className="consent-banner" role="dialog" aria-labelledby="consent-title">
      <div className="consent-banner-inner">
        <div className="consent-copy">
          <h2 id="consent-title">Deine Privatsphäre</h2>
          <p>
            Mit deiner Einwilligung verwenden wir den Meta Pixel, um Seitenaufrufe
            und Klicks auf Buchhändler-Links zu messen. Ohne Zustimmung bleibt das
            Marketing-Tracking deaktiviert. Mehr dazu in der{" "}
            <a href={LEGAL_LINKS.privacy}>Datenschutzerklärung</a>.
          </p>
        </div>
        <div className="consent-actions">
          <button type="button" onClick={() => selectConsent("denied")}>
            Ablehnen
          </button>
          <button type="button" onClick={() => selectConsent("granted")}>
            Marketing akzeptieren
          </button>
          {consent !== null && (
            <button type="button" className="consent-close" onClick={() => setIsOpen(false)}>
              Schließen
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
