import { IMAGE_PATHS } from "../config/links";

export function AuthorSection() {
  return (
    <section className="section author-section" id="autor" aria-labelledby="author-title">
      <div className="container author-layout">
        <figure className="author-portrait">
          <img
            src={IMAGE_PATHS.author}
            alt="Portrait von Dr. Aljoscha Groos"
            loading="lazy"
          />
        </figure>
        <div className="author-copy">
          <p className="section-kicker">Über den Autor</p>
          <h2 id="author-title">Dr. Aljoscha Groos</h2>
          <p>
            Dr. Aljoscha Groos beschäftigt sich seit vielen Jahren mit Aktien,
            Marktpsychologie und strukturierten Investmentprozessen. In
            „Börse ohne Bauchgefühl“ verbindet er persönliche Börsenerfahrung
            mit einem klaren, praxisnahen Regelwerk für Privatanleger.
          </p>
          <dl className="author-signals" aria-label="Thematische Schwerpunkte">
            <div>
              <dt>Fokus</dt>
              <dd>Regeln statt Reaktion</dd>
            </div>
            <div>
              <dt>Ansatz</dt>
              <dd>Checklisten und Routinen</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
