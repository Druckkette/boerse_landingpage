export type MarketingConsent = "granted" | "denied";

type StoredConsent = {
  version: 1;
  marketing: MarketingConsent;
  updatedAt: string;
};

const CONSENT_STORAGE_KEY = "boerse-ohne-bauchgefuehl-consent";
const CONSENT_VERSION = 1;
const OPEN_SETTINGS_EVENT = "boerse:open-consent-settings";
let currentSessionConsent: MarketingConsent | null = null;

export function getMarketingConsent(): MarketingConsent | null {
  try {
    const storedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!storedValue) return currentSessionConsent;

    const consent = JSON.parse(storedValue) as Partial<StoredConsent>;
    if (
      consent.version !== CONSENT_VERSION ||
      (consent.marketing !== "granted" && consent.marketing !== "denied")
    ) {
      return currentSessionConsent;
    }

    return consent.marketing;
  } catch {
    return currentSessionConsent;
  }
}

export function saveMarketingConsent(marketing: MarketingConsent) {
  currentSessionConsent = marketing;
  const consent: StoredConsent = {
    version: CONSENT_VERSION,
    marketing,
    updatedAt: new Date().toISOString()
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // The current page still respects the selection if storage is unavailable.
  }
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

export function onOpenConsentSettings(callback: () => void) {
  window.addEventListener(OPEN_SETTINGS_EVENT, callback);
  return () => window.removeEventListener(OPEN_SETTINGS_EVENT, callback);
}
