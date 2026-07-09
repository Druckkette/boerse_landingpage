import { problems } from "../content";

export function ProblemSection() {
  return (
    <section className="section problem-section" aria-labelledby="problem-title">
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Das eigentliche Risiko</p>
          <h2 id="problem-title">
            Nicht der Informationsmangel ist das Problem. Sondern die Entscheidung
            im falschen Moment.
          </h2>
          <p>
            Heute kann jeder in wenigen Minuten ein Depot eröffnen. Das Problem
            ist nicht mehr der Zugang zur Börse. Das Problem ist, was danach
            passiert: Kurse laufen gegen dich, Nachrichten verunsichern dich,
            Gewinne machen euphorisch und Verluste werden schöngeredet. Genau
            dort entscheidet sich, ob du nach Plan handelst - oder nach
            Bauchgefühl.
          </p>
        </div>
        <div className="card-grid problem-grid">
          {problems.map((problem) => (
            <article className="problem-card" key={problem.thought}>
              <blockquote>{problem.thought}</blockquote>
              <p>{problem.pattern}</p>
            </article>
          ))}
        </div>
        <p className="problem-promise">
          Das Buch setzt genau an dieser Stelle an: aus Impuls, Hoffnung und
          Marktgeräusch wird ein prüfbarer Ablauf mit klaren Regeln.
        </p>
      </div>
    </section>
  );
}
