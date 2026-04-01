import Section from "../common/Section.jsx";

export default function AboutStory() {
  return (
    <Section className="about-story">
      <div className="sec-inner as-inner">
        <div className="as-visual">
          <div className="as-main">
            <div className="big-ico">🚀</div>
            <h3>Breaking Barriers Since Day One</h3>
            <p>
              Every capable student in Northeast India deserves the right
              guidance regardless of their financial background or where they
              grew up.
            </p>
          </div>
          <div className="as-f1">
            <strong>₹0</strong>
            <span>Guidance Fees</span>
          </div>
        </div>

        <div>
          <div className="kicker">Our Story</div>
          <h2 className="display dark">
            Why ScholarGrab <em>Stands</em> for Students
          </h2>
          <p className="prose dark">
            In India, many students aspire to crack JEE and NEET. But only a
            small percentage achieve their goals — and this gap is almost never
            about ability. It&apos;s about access.
          </p>

          <div className="as-pts">
            <div className="apt">
              <div className="apt-ico">🎯</div>
              <div>
                <h4>Our Mission</h4>
                <p>
                  Support students through free scholarships, mentorship &amp;
                  guidance — helping them make informed decisions and move
                  toward their goals with confidence.
                </p>
              </div>
            </div>
            <div className="apt">
              <div className="apt-ico">📍</div>
              <div>
                <h4>Our Focus</h4>
                <p>
                  Specifically serving JEE and NEET aspirants across Northeast
                  India — a region with tremendous talent and historically
                  limited access to quality guidance.
                </p>
              </div>
            </div>
            <div className="apt">
              <div className="apt-ico">💡</div>
              <div>
                <h4>Our Approach</h4>
                <p>
                  Connecting students with IIT &amp; AIIMS toppers who share
                  real strategies and lived experience — not generic coaching
                  scripts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}