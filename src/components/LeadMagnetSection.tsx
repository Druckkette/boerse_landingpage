export function LeadMagnetSection() {
  return (
    <section className="section lead-section" id="checkliste" aria-labelledby="lead-title">
      <div className="container lead-layout">
        <div className="lead-preview" aria-hidden="true">
          <div className="pdf-mockup">
            <span>Checkliste</span>
            <strong>12-Punkte-Kaufcheckliste</strong>
            <p>Prüfe vor jeder Order:</p>
            <ul>
              <li>Marktphase</li>
              <li>Relative Stärke</li>
              <li>Kaufzone</li>
              <li>Stopp & Risiko</li>
              <li>Quartalszahlen</li>
              <li>Verkaufsplan</li>
            </ul>
          </div>
        </div>
        <div className="lead-copy">
          <p className="section-kicker">Kostenlose Checkliste</p>
          <h2 id="lead-title">Die 12-Punkte-Kaufcheckliste gegen Bauchgefühl-Trades</h2>
          <p>
            Bevor du eine Aktie kaufst, sollten Marktphase, Setup, Risiko,
            Stopp, Positionsgröße und nächster Ausstieg klar sein. Die
            Checkliste hilft dir, genau diese Punkte vor der Order zu prüfen -
            damit aus einem spontanen Impuls ein bewusster Trade wird.
          </p>
          <div className="lead-form lead-download-note" role="status">
            <strong>Download bald verfügbar</strong>
            <p className="form-note">
              Das Newsletter-Formular ist vorerst entfernt. Die Checkliste wird
              eingebunden, sobald Download, Versand und Datenschutztexte final
              konfiguriert sind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
