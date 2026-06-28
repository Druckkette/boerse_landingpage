import { problems } from "../content";

export function ProblemSection() {
  return (
    <section className="section problem-section" aria-labelledby="problem-title">
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Das eigentliche Risiko</p>
          <h2 id="problem-title">
            Viele Anleger scheitern nicht am Markt — sondern an ihren eigenen
            Entscheidungen.
          </h2>
        </div>
        <div className="card-grid problem-grid">
          {problems.map((problem, index) => (
            <article className="problem-card" key={problem}>
              <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
              <p>{problem}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
