import Button from "../common/Button.jsx";
import Section from "../common/Section.jsx";

export default function AboutCTA() {
  return (
    <Section className="cta-band tex">
      <div className="cta-inner">
        <h2>
          Inspired? <em>Join Us.</em>
        </h2>
        <p>Take the first step toward your dream career — completely free.</p>
        <div className="cta-btns">
          <Button as="a" href="/register" variant="red">
            Register Today
          </Button>
          <Button as="a" href="/programs" variant="outline">
            View Programs
          </Button>
        </div>
      </div>
    </Section>
  );
}