import { Link } from "react-router-dom";
import Button from "../common/Button.jsx";
import StatStrip from "../common/StatStrip.jsx";

export default function HomeHero() {
  return (
    <>
      <section className="home-hero tex">
        <div className="hh-grid">
          <div>
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
              structured preparation support for every student in Northeast
              India — at zero cost.
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

          <div className="hh-panel">
            <div className="panel-stats">
              <div className="ps">
                <div className="ps-n">2000+</div>
                <div className="ps-l">Students</div>
              </div>
              <div className="ps">
                <div className="ps-n">1500+</div>
                <div className="ps-l">Scholarships</div>
              </div>
              <div className="ps">
                <div className="ps-n">₹0</div>
                <div className="ps-l">Fee</div>
              </div>
            </div>
            <ul className="panel-list">
              <li>Free Scholarships up to 100%</li>
              <li>IIT &amp; AIIMS Topper Mentorship</li>
              <li>Structured Study Plans</li>
              <li>Continuous Exam-Day Support</li>
              <li>Full Opportunity Awareness</li>
            </ul>
          </div>
        </div>
      </section>

      <StatStrip />
    </>
  );
}