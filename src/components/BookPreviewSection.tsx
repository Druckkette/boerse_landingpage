import { useEffect, useRef, useState } from "react";

type PreviewSpread = {
  title: string;
  description: string;
  pdfPages: number[];
};

const previewSpreads: PreviewSpread[] = [
  {
    title: "Was dich im Buch erwartet",
    description: "Der vollständige Weg von Psychologie und Marktverständnis bis zu Risiko, Routinen und Verbesserung.",
    pdfPages: [11, 12, 13]
  },
  {
    title: "Das persönliche Regelwerk",
    description: "Leitfragen und klare Regeln ersetzen spontane Entscheidungen aus dem Bauch heraus.",
    pdfPages: [29, 30]
  },
  {
    title: "Marktzyklen verstehen",
    description: "Wiederkehrende Marktphasen erkennen und das eigene Handeln an das Umfeld anpassen.",
    pdfPages: [33, 34]
  },
  {
    title: "Frühwarnzeichen erkennen",
    description: "Makroeinflüsse, Volumen und Topbildung als Hinweise auf eine nachlassende Marktstärke.",
    pdfPages: [62, 63]
  },
  {
    title: "Risikomanagement in Korrekturen",
    description: "Kapital schützen, Geduld bewahren und nicht versuchen, den exakten Tiefpunkt zu erraten.",
    pdfPages: [71, 72]
  },
  {
    title: "Marktbreite richtig lesen",
    description: "Erkennen, ob ein Trend von vielen Aktien getragen wird oder nur von wenigen Schwergewichten.",
    pdfPages: [84, 85]
  },
  {
    title: "Warnzeichen im Chart",
    description: "Volumenreiche Verlusttage und gebrochene Durchschnittslinien frühzeitig einordnen.",
    pdfPages: [215, 216]
  },
  {
    title: "Die Chart-Checkliste",
    description: "Positive, negative und neutrale Merkmale für eine schnelle, systematische Aktienbewertung.",
    pdfPages: [254, 255]
  },
  {
    title: "Kaufsignale einordnen",
    description: "Einstiege mit Kurs, Volumen und relativer Stärke bestätigen, statt Bewegungen hinterherzulaufen.",
    pdfPages: [270, 271]
  },
  {
    title: "Nachkauf-Regeln anwenden",
    description: "Positionen nur bei bestätigter Stärke und mit einem klar definierten Risiko ausbauen.",
    pdfPages: [281, 282]
  },
  {
    title: "Verkaufsregeln anwenden",
    description: "Gewinne mit gestaffelten Verkäufen und objektiven Schwellenwerten systematisch sichern.",
    pdfPages: [295, 296]
  },
  {
    title: "Risiko und Positionsgröße",
    description: "Die Positionsgröße aus Depotwert, Stoppabstand und maximalem Verlust nachvollziehbar berechnen.",
    pdfPages: [327, 328]
  },
  {
    title: "Trades auswerten",
    description: "Mit Ex-post-Analyse und festen Routinen aus jedem Trade lernen und den Prozess verbessern.",
    pdfPages: [348, 349]
  }
];

const previewPages = previewSpreads.flatMap((spread) =>
  spread.pdfPages.map((pdfPage) => ({ pdfPage, title: spread.title }))
);

const pageSource = (pdfPage: number) => `/assets/book-preview/page-${pdfPage}.webp`;

export function BookPreviewSection() {
  const [activeSpreadIndex, setActiveSpreadIndex] = useState(0);
  const [lightboxPageIndex, setLightboxPageIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const activeSpread = previewSpreads[activeSpreadIndex];
  const isLightboxOpen = lightboxPageIndex !== null;

  const showSpread = (index: number) => {
    setActiveSpreadIndex((index + previewSpreads.length) % previewSpreads.length);
  };

  const openLightbox = (pdfPage: number) => {
    openerRef.current = document.activeElement as HTMLElement | null;
    setLightboxPageIndex(previewPages.findIndex((page) => page.pdfPage === pdfPage));
  };

  const stepLightbox = (direction: number) => {
    setLightboxPageIndex((current) => {
      if (current === null) return null;
      return (current + direction + previewPages.length) % previewPages.length;
    });
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lightboxRef.current?.querySelector<HTMLButtonElement>(".preview-lightbox-close")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxPageIndex(null);
      if (event.key === "ArrowLeft") stepLightbox(-1);
      if (event.key === "ArrowRight") stepLightbox(1);
      if (event.key !== "Tab" || !lightboxRef.current) return;

      const focusable = Array.from(
        lightboxRef.current.querySelectorAll<HTMLButtonElement>("button:not([disabled])")
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      openerRef.current?.focus();
    };
  }, [isLightboxOpen]);

  const lightboxPage = lightboxPageIndex === null ? null : previewPages[lightboxPageIndex];

  return (
    <section className="section book-preview-section" id="blick-ins-buch" aria-labelledby="book-preview-title">
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Blick ins Buch</p>
          <h2 id="book-preview-title">Kein Lesebuch. Ein Arbeitsbuch für klare Entscheidungen.</h2>
          <p>
            Entdecke ausgewählte Seiten mit Regeln, Checklisten und kommentierten Charts aus dem vollständigen Investmentprozess.
          </p>
        </div>

        <div
          className="book-preview-shell"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") showSpread(activeSpreadIndex - 1);
            if (event.key === "ArrowRight") showSpread(activeSpreadIndex + 1);
          }}
        >
          <div className="book-preview-meta" aria-live="polite">
            <div>
              <span className="book-preview-index">
                Auszug {String(activeSpreadIndex + 1).padStart(2, "0")}
              </span>
              <h3>{activeSpread.title}</h3>
            </div>
            <p>{activeSpread.description}</p>
          </div>

          <div
            className={`book-preview-pages page-count-${activeSpread.pdfPages.length}`}
            aria-label={`${activeSpread.title}, ${activeSpread.pdfPages.length} Seiten`}
            key={activeSpreadIndex}
          >
            {activeSpread.pdfPages.map((pdfPage, pageIndex) => (
              <button
                className="book-preview-page"
                type="button"
                onClick={() => openLightbox(pdfPage)}
                aria-label={`Seite ${pageIndex + 1} von ${activeSpread.pdfPages.length} im Auszug ${activeSpread.title} vergrößern`}
                key={pdfPage}
              >
                <img
                  src={pageSource(pdfPage)}
                  alt={`${activeSpread.title}, Seite ${pageIndex + 1} von ${activeSpread.pdfPages.length}`}
                  width="977"
                  height="1481"
                />
              </button>
            ))}
          </div>

          <p className="book-preview-hint">
            <span className="book-preview-swipe-hint">Seitlich wischen · </span>
            Seite antippen zum Vergrößern
          </p>

          <div className="book-preview-controls">
            <button
              className="book-preview-arrow"
              type="button"
              aria-label="Vorherigen Auszug anzeigen"
              onClick={() => showSpread(activeSpreadIndex - 1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <div className="book-preview-progress">
              <span>{String(activeSpreadIndex + 1).padStart(2, "0")} / {previewSpreads.length}</span>
              <div className="book-preview-dots" aria-label="Auszug auswählen">
                {previewSpreads.map((spread, index) => (
                  <button
                    className={index === activeSpreadIndex ? "is-active" : ""}
                    type="button"
                    aria-label={`${spread.title} anzeigen`}
                    aria-current={index === activeSpreadIndex ? "true" : undefined}
                    onClick={() => showSpread(index)}
                    key={spread.title}
                  />
                ))}
              </div>
            </div>
            <button
              className="book-preview-arrow"
              type="button"
              aria-label="Nächsten Auszug anzeigen"
              onClick={() => showSpread(activeSpreadIndex + 1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      {lightboxPage && (
        <div
          className="preview-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="preview-lightbox-title"
          ref={lightboxRef}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLightboxPageIndex(null);
          }}
        >
          <div className="preview-lightbox-panel">
            <div className="preview-lightbox-head">
              <div>
                <span>Seite {lightboxPageIndex! + 1} von {previewPages.length}</span>
                <strong id="preview-lightbox-title">{lightboxPage.title}</strong>
              </div>
              <button
                className="preview-lightbox-close"
                type="button"
                aria-label="Vergrößerte Buchseite schließen"
                onClick={() => setLightboxPageIndex(null)}
              >
                ×
              </button>
            </div>
            <div className="preview-lightbox-content">
              <button type="button" aria-label="Vorherige Buchseite" onClick={() => stepLightbox(-1)}>
                <span aria-hidden="true">←</span>
              </button>
              <img
                src={pageSource(lightboxPage.pdfPage)}
                alt={`Vergrößerte Buchseite: ${lightboxPage.title}`}
                width="977"
                height="1481"
              />
              <button type="button" aria-label="Nächste Buchseite" onClick={() => stepLightbox(1)}>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
