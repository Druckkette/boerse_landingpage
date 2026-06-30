import { takeaways } from "../content";

export function TakeawaysSection() {
  return (
    <section className="section takeaways-section" aria-labelledby="takeaways-title">
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Was du mitnimmst</p>
          <h2 id="takeaways-title">
            Ein Regelwerk, das dich vor den teuersten Bauchgefühl-Fehlern
            schützt.
          </h2>
        </div>
        <ul className="check-list takeaways-grid">
          {takeaways.map((takeaway) => (
            <li key={takeaway}>{takeaway}</li>
          ))}
        </ul>
        <p className="takeaways-closing">
          Das Ziel ist nicht, jede Bewegung perfekt zu erwischen. Das Ziel ist,
          bessere Entscheidungen wiederholbar zu machen.
        </p>
      </div>
    </section>
  );
}
