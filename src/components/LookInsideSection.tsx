import { bookContents, lookInsideItems } from "../content";

const contentModules = [
  {
    title: "Fundament",
    outcome: "Du verstehst, wann du handeln solltest - und wann Zurückhaltung die bessere Entscheidung ist.",
    itemIndexes: [0, 1]
  },
  {
    title: "Auswahl & Analyse",
    outcome:
      "Du reduzierst den Markt auf Kandidaten, die fundamental, relativ und charttechnisch prüfbar sind.",
    itemIndexes: [2, 3]
  },
  {
    title: "Regeln & Risiko",
    outcome:
      "Du planst Einstieg, Ausstieg, Stopp, Positionsgröße und Portfolio-Risiko, bevor Kapital gebunden wird.",
    itemIndexes: [4, 5, 6]
  },
  {
    title: "Routine & Lernkurve",
    outcome:
      "Du machst aus Trades dokumentierte Erfahrung und aus Erfahrung ein belastbares persönliches System.",
    itemIndexes: [7]
  }
];

export function LookInsideSection() {
  return (
    <>
      <section className="section contents-section" id="inhalte" aria-labelledby="contents-title">
        <div className="container">
          <div className="section-heading narrow">
            <p className="section-kicker">Inhalte des Buchs</p>
            <h2 id="contents-title">
              Vom ersten Marktüberblick bis zur eigenen Handelsroutine.
            </h2>
            <p>
              Die Kapitel bauen bewusst aufeinander auf. Erst kommt das
              Fundament aus Psychologie und Marktverständnis. Danach folgen
              Aktienauswahl, Chartanalyse, Kauf- und Verkaufsregeln sowie Risiko-
              und Portfoliomanagement. Den Abschluss bildet die Lernschleife aus
              Handelstagebuch, Ex-post-Analyse und Routinen.
            </p>
          </div>
          <div className="contents-layout">
            <aside className="contents-framework" aria-labelledby="contents-framework-title">
              <p className="contents-framework-kicker">Buchlogik</p>
              <h3 id="contents-framework-title">Vier Module, ein Investmentprozess.</h3>
              <p>
                Die Inhalte folgen der Reihenfolge, in der eine saubere
                Börsenentscheidung entsteht: erst verstehen, dann auswählen,
                dann planen, dann auswerten.
              </p>
              <ul>
                <li>
                  <strong>01</strong>
                  <span>Fundament legen</span>
                </li>
                <li>
                  <strong>02</strong>
                  <span>Kandidaten prüfen</span>
                </li>
                <li>
                  <strong>03</strong>
                  <span>Regeln anwenden</span>
                </li>
                <li>
                  <strong>04</strong>
                  <span>Routine verbessern</span>
                </li>
              </ul>
            </aside>
            <div className="contents-modules">
              {contentModules.map((module, moduleIndex) => (
                <article className="content-module" key={module.title}>
                  <div className="content-module-header">
                    <span>Modul {String(moduleIndex + 1).padStart(2, "0")}</span>
                    <h3>{module.title}</h3>
                    <p>{module.outcome}</p>
                  </div>
                  <div className="module-chapters">
                    {module.itemIndexes.map((itemIndex) => {
                      const item = bookContents[itemIndex];

                      return (
                        <article className="chapter-card" key={item.title}>
                          <span className="chapter-number">
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section look-section" aria-labelledby="look-title">
        <div className="container">
          <div className="section-heading narrow">
            <p className="section-kicker">Ein Blick ins Buch</p>
            <h2 id="look-title">Konkrete Regeln statt abstrakter Börsenweisheiten.</h2>
            <p>
              Das Buch bleibt nicht bei allgemeinen Ratschlägen stehen. Es
              übersetzt Marktpsychologie, Aktienanalyse und Risikomanagement in
              Checklisten, Regeln und wiederholbare Routinen.
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
    </>
  );
}
