import Section from "../common/Section.jsx";

const eligibilityPoints = [
  "Students who have passed HSLC, are in HS 2nd year, or are dropper students can join.",
  "Students must be preparing or willing to prepare for NEET.",
  "No income certificate is required.",
  "Dropper students must have at least 55% in PCB.",
  "Class 10 or Integrated students must have at least 50%.",
  "HS 2nd year students have no fixed percentage criteria, but HS 1st year marks may be considered if applications are high."
];

const processSteps = [
  "An initial online meeting will be conducted with students and parents, along with the founding member and NEET toppers, to introduce the platform and ensure seriousness and coordination.",
  "Counselling and selection will be based on commitment, seriousness, and eligibility criteria.",
  "After counselling, students will be introduced to mentors during the first month.",
  "Based on individual performance, expectations, and situation, students will be assigned to the most suitable mentor and peer group.",
  "Each group will consist of 50 students guided by one dedicated mentor."
];

export default function HowItWorks() {
  return (
    <Section className="eligibility-sec tex">
      <div className="sec-inner">
        <div className="center">
          <div className="kicker">Eligibility & Process</div>
          <h2 className="display">
            Join the Right <em>Mentorship Journey</em>
          </h2>
          <p className="prose center eligibility-intro">
            Our platform follows a structured approach to identify committed NEET
            aspirants, guide them through counselling, and connect them with the
            most suitable mentors and peer groups.
          </p>
        </div>

        <div className="eligibility-layout">
          <div className="eligibility-block">
            <div className="eligibility-block-head">
              <span className="mini-kicker">Part 01</span>
              <h3>Eligibility Criteria</h3>
            </div>

            <div className="eligibility-list">
              {eligibilityPoints.map((point, index) => (
                <div key={index} className="eligibility-item">
                  <div className="eligibility-num">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="eligibility-block">
            <div className="eligibility-block-head">
              <span className="mini-kicker">Part 02</span>
              <h3>Selection & Mentorship Process</h3>
            </div>

            <div className="process-list">
              {processSteps.map((step, index) => (
                <div key={index} className="process-item">
                  <div className="process-line" />
                  <div className="process-dot">{index + 1}</div>
                  <div className="process-content">
                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}