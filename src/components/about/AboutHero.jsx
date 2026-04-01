import Section from "../common/Section.jsx";
import Button from "../common/Button.jsx";

export default function AboutHero() {
  return (
    <Section className="ph tex">
      <div className="ph-inner">
        <div className="about-top-hero">
          <div className="hh-eyebrow">
            <span className="dot" />
            Northeast India&apos;s #1 Free Guidance Platform
          </div>

          <h1 className="hh-title">
            <span>YOUR PATH</span>
            <br />
            <span className="line2">TO JEE &amp; NEET</span>
            <br />
            <span className="line3">Starts Right Here</span>
          </h1>

          <p className="hh-sub">
            Free scholarships, mentorship from IIT &amp; AIIMS toppers, and
            structured preparation support for every student in Northeast India
            — at zero cost.
          </p>

          <div className="hh-btns">
            <Button as="a" href="/register" variant="red">
              Register for Free
            </Button>
            <Button as="a" href="/programs" variant="outline">
              Explore Programs
            </Button>
          </div>
 
        
        </div>
<br />  <br />    <br />
        <div className="ph-pill">About ScholarGrab</div>

        <h1>
          We Stand for <em>Every Student</em> Who Deserves a Fair Chance
        </h1>

        <p>
          SCHOLARGRAB is a scholarship and career guidance platform dedicated to
          helping students prepare for NEET and JEE while exploring educational
          opportunities and academic support programs. We assist students in
          discovering scholarship benefits, understanding exam pathways, and
          identifying the right learning approach based on their interests and
          goals.
        </p>

        <p className="about-sub-copy">
          We connect schools and students with toppers and mentors, providing
          personalized guidance throughout their NEET preparation journey. We
          collaborate with NGOs working towards student empowerment and
          education, and we ensure access to quality mentorship for aspiring
          students.
        </p>

        <div className="breadcrumb">
          <span>Home</span>
          <span className="sep">/</span>
          <span className="cur">About</span>
        </div>
      </div>
    </Section>
  );
}