import { audiences } from "../content";

export function AudienceSection() {
  return (
    <section className="section audience-section" aria-labelledby="audience-title">
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Für wen?</p>
          <h2 id="audience-title">Für Anleger, die Struktur wichtiger finden als Lärm.</h2>
        </div>
        <div className="card-grid three-columns">
          {audiences.map((audience) => (
            <article className="audience-card" key={audience.title}>
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
