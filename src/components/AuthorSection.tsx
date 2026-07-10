import { IMAGE_PATHS } from "../config/links";
import { authorContent } from "../content";

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
          <p>{authorContent.introduction}</p>
          <p>{authorContent.background}</p>
          <p>{authorContent.approach}</p>
          <dl className="author-signals" aria-label="Thematische Schwerpunkte">
            {authorContent.signals.map((signal) => (
              <div key={signal.label}>
                <dt>{signal.label}</dt>
                <dd>{signal.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
