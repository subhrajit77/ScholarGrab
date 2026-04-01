export default function RegisterPerks() {
  return (
    <>
      <div className="free-pill">
        <span>100% Free</span>
        <span>·</span>
        <span>Guidance · Zero Fee</span>
      </div>

      <h2 className="display dark">
        One Form. <em>Full Support.</em>
      </h2>

      <p className="prose dark">
        Tell us about your goals, background, and preparation level. Our team
        uses this to connect you with the right mentors, resources, and
        scholarships — all at no cost.
      </p>

      <div className="reg-perks">
        <div className="rp">
          <div className="rp-ico">🎯</div>
          <div>
            <h4>Personalised Guidance</h4>
            <p>Mentorship aligned with your exam, class, and current level.</p>
          </div>
        </div>
        <div className="rp">
          <div className="rp-ico">💸</div>
          <div>
            <h4>Scholarship Matching</h4>
            <p>
              We identify scholarships based on your financial and academic
              profile.
            </p>
          </div>
        </div>
        <div className="rp">
          <div className="rp-ico">📅</div>
          <div>
            <h4>Structured Plan</h4>
            <p>
              Clear roadmap with milestones from registration to exam day.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}