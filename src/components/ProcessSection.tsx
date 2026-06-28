import { processSteps } from "../content";

export function ProcessSection() {
  return (
    <section className="section process-section" id="prozess" aria-labelledby="process-title">
      <div className="container process-layout">
        <div className="section-heading">
          <p className="section-kicker">Die Lösung</p>
          <h2 id="process-title">
            Börse ohne Bauchgefühl liefert einen klaren Investmentprozess.
          </h2>
          <p>
            Statt spontaner Einzelentscheidungen steht ein wiederholbarer Ablauf
            im Mittelpunkt: vor dem Kauf prüfen, Risiken begrenzen und Verkäufe
            bewusst planen.
          </p>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
