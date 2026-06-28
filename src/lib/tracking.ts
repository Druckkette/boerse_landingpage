type TrackingPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: TrackingPayload[];
    plausible?: (eventName: string, options?: { props?: TrackingPayload }) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, payload: TrackingPayload = {}) {
  // TODO TRACKING: Hier spaeter Meta Pixel, Google Analytics oder Plausible initialisieren.
  window.plausible?.(eventName, { props: payload });
  window.dataLayer?.push({ event: eventName, ...payload });
  window.fbq?.("trackCustom", eventName, payload);

  if (import.meta.env.DEV) {
    console.debug("[tracking]", eventName, payload);
  }
}
