import Section from "../common/Section.jsx";
import Kicker from "../common/Kicker.jsx";
import mentors from "../../data/mentors.js";

function MentorCard({ mentor }) {
  return (
    <div className="mc">
      <div className="mc-av">{mentor.initials}</div>
      <div className="mc-body">
        <h4>{mentor.name}</h4>
        <div className="role">{mentor.role}</div>
        <p>{mentor.bio}</p>
      </div>
    </div>
  );
}

export default function MentorsSection() {
  return (
    <Section className="mentors-sec">
      <div className="sec-inner">
        <div className="center">
          <Kicker>Our Mentors</Kicker>
          <h2 className="display dark">
            Guided by Those Who&apos;ve <em>Been There</em>
          </h2>
          <p className="prose dark center">
            IIT and AIIMS students who know firsthand what it takes to crack
            India&apos;s most competitive exams.
          </p>
        </div>
        <div className="mentor-grid">
          {mentors.map((m) => (
            <MentorCard key={m.name} mentor={m} />
          ))}
        </div>
      </div>
    </Section>
  );
}