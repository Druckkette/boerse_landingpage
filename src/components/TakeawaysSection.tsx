import { takeaways } from "../content";

export function TakeawaysSection() {
  return (
    <section className="section takeaways-section" aria-labelledby="takeaways-title">
      <div className="container takeaways-layout">
        <div className="section-heading">
          <p className="section-kicker">Was bleibt</p>
          <h2 id="takeaways-title">Was du aus dem Buch mitnimmst</h2>
        </div>
        <ul className="check-list">
          {takeaways.map((takeaway) => (
            <li key={takeaway}>{takeaway}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
