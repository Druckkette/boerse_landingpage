import { problems } from "../content";

export function ProblemSection() {
  return (
    <section className="section problem-section" aria-labelledby="problem-title">
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Das eigentliche Risiko</p>
          <h2 id="problem-title">
            Viele Anleger verlieren nicht wegen fehlender Informationen -
            sondern wegen schlechter Entscheidungen.
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
          {problems.map((problem, index) => (
            <article className="problem-card" key={problem.thought}>
              <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
              <blockquote>{problem.thought}</blockquote>
              <p>{problem.pattern}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
