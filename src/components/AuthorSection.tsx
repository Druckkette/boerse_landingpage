import { IMAGE_PATHS } from "../config/links";

export function AuthorSection() {
  return (
    <section className="section author-section" id="autor" aria-labelledby="author-title">
      <div className="container author-layout">
        <figure className="author-portrait">
          <img
            src={IMAGE_PATHS.author}
            alt="Dr. Aljoscha Michael Groos, Autor von Börse ohne Bauchgefühl"
            loading="lazy"
          />
        </figure>
        <div className="author-copy">
          <p className="section-kicker">Über den Autor</p>
          <h2 id="author-title">Dr. Aljoscha Michael Groos</h2>
          <p>
            Sein Interesse an der Börse begann früh mit einem eigenen Spieldepot,
            das er noch anhand von Kursen aus der Tageszeitung pflegte. Heute
            beschäftigt sich Dr. Aljoscha Michael Groos seit über 15 Jahren
            aktiv mit internationalen Aktienmärkten.
          </p>
          <p>
            Sein Schwerpunkt liegt auf technischer Analyse, Marktstruktur,
            relativer Stärke und regelbasiertem Positionsmanagement. Geprägt
            wurde sein Blick auf die Börse auch durch die Erfahrung, dass
            fehlendes Wissen und blinde Abhängigkeit von fremden Empfehlungen
            teuer werden können.
          </p>
          <p>
            Aus vielen Jahren eigener Hochs, Fehler und Lernschleifen entstand
            der Ansatz hinter „Börse ohne Bauchgefühl“: ein System, das Anlegern
            hilft, selbstbestimmter zu handeln, Risiken früher zu erkennen und
            Entscheidungen nicht von Emotionen dominieren zu lassen.
          </p>
          <dl className="author-signals" aria-label="Thematische Schwerpunkte">
            <div>
              <dt>Fokus</dt>
              <dd>Marktstruktur & relative Stärke</dd>
            </div>
            <div>
              <dt>Ansatz</dt>
              <dd>Regeln, Checklisten, Routinen</dd>
            </div>
            <div>
              <dt>Erfahrung</dt>
              <dd>Über 15 Jahre Aktienmärkte</dd>
            </div>
            <div>
              <dt>Ziel</dt>
              <dd>Selbstbestimmte Entscheidungen</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
