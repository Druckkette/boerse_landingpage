import { processSteps } from "../content";

const processPhases = [
  {
    label: "Orientierung",
    title: "Markt und Verhalten einordnen",
    text:
      "Bevor eine Aktie interessant wird, prüfst du dein eigenes Entscheidungsverhalten und das Marktumfeld.",
    stepIndexes: [0, 1]
  },
  {
    label: "Auswahl",
    title: "Kandidaten objektiv prüfen",
    text:
      "Aus vielen Aktien werden nur die Werte relevant, bei denen Qualität, Stärke und technisches Bild zusammenpassen.",
    stepIndexes: [2, 3]
  },
  {
    label: "Planung",
    title: "Trade vor der Order definieren",
    text:
      "Der Kauf ist kein Impuls, sondern das Ergebnis eines Plans mit Einstieg, Stopp, Risiko und Verkaufslogik.",
    stepIndexes: [4, 5]
  },
  {
    label: "Steuerung",
    title: "Risiko begrenzen und lernen",
    text:
      "Nach dem Einstieg zählt, ob du Regeln einhältst, Risiken steuerst und jeden Trade auswertest.",
    stepIndexes: [6, 7]
  }
];

export function ProcessSection() {
  return (
    <section className="section process-section" id="prozess" aria-labelledby="process-title">
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Die Lösung</p>
          <h2 id="process-title">
            Ein Investmentprozess, der dich vom Marktbild bis zur Nachbereitung
            führt.
          </h2>
          <p>
            „Börse ohne Bauchgefühl“ verbindet die entscheidenden Bausteine
            erfolgreichen Handelns zu einem klaren Ablauf. Du lernst nicht nur,
            welche Aktien interessant sein könnten, sondern auch, wann du
            handeln solltest, wann nicht, wie du Risiken begrenzt und wie du aus
            jedem Trade besser wirst.
          </p>
        </div>
        <div className="process-system">
          <div className="process-system-head">
            <p>Vom Bauchgefühl zur Regelentscheidung</p>
            <span>Psychologie → Markt → Aktie → Chart → Kauf → Verkauf → Risiko → Lernschleife</span>
          </div>
          <ol className="process-phase-list">
            {processPhases.map((phase, phaseIndex) => (
              <li className="process-phase" key={phase.title}>
                <div className="process-phase-header">
                  <span>{phase.label}</span>
                  <strong>{String(phaseIndex + 1).padStart(2, "0")}</strong>
                  <h3>{phase.title}</h3>
                  <p>{phase.text}</p>
                </div>
                <ol className="process-step-list">
                  {phase.stepIndexes.map((stepIndex) => {
                    const step = processSteps[stepIndex];

                    return (
                      <li key={step.title}>
                        <span className="process-step-number">
                          {String(stepIndex + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4>{step.title}</h4>
                          <p>{step.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </li>
            ))}
          </ol>
          <p className="process-rule">
            <strong>Die Systemlogik:</strong> Erst wenn Marktbild, Aktienqualität,
            Chart, Risiko und Verkaufsplan zusammenpassen, wird aus einer Idee
            eine prüfbare Entscheidung.
          </p>
        </div>
      </div>
    </section>
  );
}
