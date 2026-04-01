import Button from "../common/Button.jsx";
import Section from "../common/Section.jsx";

export default function VisionCTA() {
  return (
    <Section className="cta-band tex">
      <div className="cta-inner">
        
        <h2>
          Be part of the movement. Register today and become a part of
          Northeast India&apos;s biggest free guidance platform.
       </h2>
        <div className="cta-btns">
          <Button as="a" href="/register" variant="red">
            Join for Free
          </Button>
          <Button as="a" href="/programs" variant="outline">
            See Programs
          </Button>
        </div>
      </div>
    </Section>
  );
}