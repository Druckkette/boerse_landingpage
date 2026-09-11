import { getMarketingConsent } from "./consent";

export const META_PIXEL_ID = "1060322063582544";

type MetaPixelFunction = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: MetaPixelFunction;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
  }
}

let initialized = false;
let baseEventsSent = false;
let consentRevoked = false;

function debugMetaEvent(eventName: string, payload?: Record<string, unknown>) {
  if (import.meta.env.DEV) {
    console.debug("[meta-pixel]", eventName, JSON.stringify(payload ?? {}));
  }
}

function installMetaPixelQueue() {
  if (window.fbq) return window.fbq;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }
    fbq.queue.push(args);
  } as MetaPixelFunction;

  fbq.queue = [];
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  window._fbq = fbq;
  return fbq;
}

function loadMetaPixelScript() {
  if (
    document.querySelector(
      'script[data-meta-pixel="true"], script[src*="connect.facebook.net"][src$="/fbevents.js"]'
    )
  ) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  script.dataset.metaPixel = "true";
  document.head.appendChild(script);
}

export function initializeMetaPixel() {
  if (getMarketingConsent() !== "granted") return;

  const fbq = installMetaPixelQueue();
  loadMetaPixelScript();

  if (consentRevoked) {
    fbq("consent", "grant");
    consentRevoked = false;
  }

  if (!initialized) {
    fbq("init", META_PIXEL_ID);
    debugMetaEvent("init", { pixel_id: META_PIXEL_ID });
    initialized = true;
  }

  if (!baseEventsSent) {
    fbq("track", "PageView");
    debugMetaEvent("PageView");
    const viewContentPayload = {
      content_name: "Börse ohne Bauchgefühl",
      content_category: "Buch",
      content_type: "product"
    };
    fbq("track", "ViewContent", viewContentPayload);
    debugMetaEvent("ViewContent", viewContentPayload);
    baseEventsSent = true;
  }
}

export function revokeMetaPixelConsent() {
  for (const cookieName of ["_fbp", "_fbc"]) {
    document.cookie = `${cookieName}=; Max-Age=0; Path=/; SameSite=Lax`;
  }

  if (window.fbq && initialized) {
    window.fbq("consent", "revoke");
    consentRevoked = true;
  }
}

export function trackMetaCustomEvent(
  eventName: string,
  payload: Record<string, string | number | boolean | undefined>
) {
  if (getMarketingConsent() !== "granted") return;
  initializeMetaPixel();
  window.fbq?.("trackCustom", eventName, payload);
  debugMetaEvent(eventName, payload);
}
