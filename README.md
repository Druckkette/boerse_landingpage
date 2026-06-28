# Börse ohne Bauchgefühl Landingpage

Professionelle Landingpage für das Finanzbuch „Börse ohne Bauchgefühl“ von Dr. Aljoscha Groos. Das Projekt ist als schlanke Vite/React-Seite gebaut und kann statisch über GitHub Pages, Netlify oder Vercel veröffentlicht werden.

## Lokal starten

```bash
npm install
npm run dev
```

Der lokale Entwicklungsserver zeigt anschließend die URL im Terminal an.

## Produktionsbuild prüfen

```bash
npm run build
npm run preview
```

Der fertige statische Build liegt danach im Ordner `dist`.

## Deployment

- **Vercel:** Framework Preset `Vite`, Build Command `npm run build`, Output Directory `dist`.
- **Netlify:** Build Command `npm run build`, Publish Directory `dist`.
- **GitHub Pages:** Das Repository enthält `.github/workflows/deploy-pages.yml`. In den GitHub-Pages-Einstellungen muss als Quelle **GitHub Actions** ausgewählt sein. Der Workflow baut mit `npm run build` und veröffentlicht den Ordner `dist`.

## Vor Livegang ersetzen

- Kauf-Links in `src/config/links.ts` (`BOOK_LINKS`)
- Impressum-, Datenschutz- und Kontakt-Links in `src/config/links.ts` (`LEGAL_LINKS`)
- Newsletter-Endpoint und Feldnamen in `src/config/links.ts` und `src/components/LeadMagnetSection.tsx`
- Tracking-Setup in `src/lib/tracking.ts` für Meta Pixel, Google Analytics oder Plausible
- Open-Graph-Bild und absolute Produktions-URL in `index.html`, sobald die Domain feststeht

Die aktuell eingebundenen Bilder liegen in `public/assets/book-cover.jpg` und `public/assets/author.jpg`. Bei späterem Austausch können diese Dateien ersetzt oder die Pfade in `src/config/links.ts` angepasst werden.

## Hinweise

Die Landingpage enthält keine Anlageberatung und keine Renditeversprechen. Formular- und Tracking-Code sind bewusst vorbereitet, aber noch nicht mit echten Drittanbieter-IDs verbunden.
