import { trackMetaCustomEvent } from "./metaPixel";

type TrackingPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: TrackingPayload[];
    plausible?: (eventName: string, options?: { props?: TrackingPayload }) => void;
  }
}

export function trackEvent(eventName: string, payload: TrackingPayload = {}) {
  window.plausible?.(eventName, { props: payload });
  window.dataLayer?.push({ event: eventName, ...payload });

  if (import.meta.env.DEV) {
    console.debug("[tracking]", eventName, payload);
  }
}

export function trackBookRetailerClick(retailer: "Amazon" | "Springer", destinationUrl: string) {
  const payload = {
    retailer,
    book_title: "Börse ohne Bauchgefühl",
    author: "Dr. Aljoscha Michael Groos",
    destination_url: destinationUrl
  };

  trackMetaCustomEvent(`${retailer}PurchaseClick`, payload);
}
