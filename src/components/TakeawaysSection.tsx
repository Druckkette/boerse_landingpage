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
        <div className="takeaways-prose">
          {takeaways.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>
              {paragraph.segments.map((segment, segmentIndex) =>
                segment.bold ? (
                  <strong key={segmentIndex}>{segment.text}</strong>
                ) : (
                  <span key={segmentIndex}>{segment.text}</span>
                )
              )}
            </p>
          ))}
        </div>
        <p className="takeaways-closing">
          Das Ziel ist nicht, jede Bewegung perfekt zu erwischen. Das Ziel ist,
          bessere Entscheidungen wiederholbar zu machen.
        </p>
      </div>
    </section>
  );
}
