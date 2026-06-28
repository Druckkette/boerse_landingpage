import { lookInsideItems } from "../content";

export function LookInsideSection() {
  return (
    <section className="section look-section" aria-labelledby="look-title">
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Ein Blick ins Buch</p>
          <h2 id="look-title">Aus abstrakten Vorsätzen wird ein konkreter Prozess.</h2>
          <p>
            Das Buch arbeitet mit Regeln, Routinen und Checklisten, damit
            Entscheidungen nicht erst im Stressmoment entstehen.
          </p>
        </div>
        <div className="look-grid">
          {lookInsideItems.map((item) => (
            <article className="look-card" key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
