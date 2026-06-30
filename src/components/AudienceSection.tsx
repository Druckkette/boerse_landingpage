import { audiences, notForYou } from "../content";

export function AudienceSection() {
  return (
    <section
      className="section audience-section"
      id="zielgruppe"
      aria-labelledby="audience-title"
    >
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Für wen ist das Buch?</p>
          <h2 id="audience-title">
            Für Anleger, die Verantwortung für ihre Entscheidungen übernehmen
            wollen.
          </h2>
        </div>
        <div className="audience-layout">
          <div className="card-grid three-columns">
            {audiences.map((audience) => (
              <article className="audience-card" key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </article>
            ))}
          </div>
          <aside className="not-for-you" aria-labelledby="not-for-you-title">
            <h3 id="not-for-you-title">Nicht für dich, wenn du ...</h3>
            <ul>
              {notForYou.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
