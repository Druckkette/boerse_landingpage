import type { KeyboardEvent } from "react";
import { faqs } from "../content";

const toggleDetailsWithKeyboard = (event: KeyboardEvent<HTMLElement>) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  const details = event.currentTarget.parentElement as HTMLDetailsElement | null;
  if (details) details.open = !details.open;
};

export function FaqSection() {
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2 id="faq-title">Häufige Fragen</h2>
          <p>
            Hier findest du Antworten zu Zielgruppe, Anlagestrategie,
            Zeitaufwand und den verfügbaren Buchformaten.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary onKeyDown={toggleDetailsWithKeyboard}>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
