import { testimonials } from "../content";

export function TestimonialSection() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="section testimonial-section" aria-labelledby="testimonial-title">
      <div className="container">
        <div className="section-heading narrow">
          <p className="section-kicker">Stimmen zum Buch</p>
          <h2 id="testimonial-title">Was Lektorat und Testleser sagen.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={`${testimonial.name}-${testimonial.quote}`}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                {testimonial.role ? <span>{testimonial.role}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
