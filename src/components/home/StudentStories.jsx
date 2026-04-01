import Section from "../common/Section.jsx";
import testimonials from "../../data/testimonials.js";

function TestimonialCard({ t }) {
  return (
    <div className="tc">
      <div className="tc-stars">★★★★★</div>
      <p>{t.text}</p>
      <div className="tc-author">
        <div className="tc-av">{t.initials}</div>
        <div>
          <div className="tc-name">{t.name}</div>
          <div className="tc-loc">{t.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function StudentStories() {
  return (
    <Section className="testi-sec">
      <div className="testi-inner">
        <div className="center">
          <div className="kicker">Student Stories</div>
          <h2 className="display dark">
            Real Students, <em>Real Results</em>
          </h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </Section>
  );
}