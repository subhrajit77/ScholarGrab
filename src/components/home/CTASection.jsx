import Button from "../common/Button.jsx";
import Section from "../common/Section.jsx";

export default function CTASection() {
  return (
    <Section className="cta-band tex">
      <div className="cta-inner">
        <h2>
          Ready to Begin <em>Your Journey?</em>
        </h2>
        <p>
          Join 2000+ students who&apos;ve already unlocked free guidance,
          scholarships &amp; topper mentorship.
        </p>
        <div className="cta-btns">
          <Button as="a" href="/register" variant="red">
            Register for Free
          </Button>
          <Button as="a" href="/about" variant="outline">
            Learn About Us
          </Button>
        </div>
      </div>
    </Section>
  );
}