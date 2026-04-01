import Section from "../common/Section.jsx";
import programs from "../../data/programs.js";

function ProgramCard({ program }) {
  return (
    <div className="pgc">
      <div className="pgc-num">{program.num}</div>
      <div className="pgc-ico">{program.icon}</div>
      <h3>{program.title}</h3>
      <p>{program.text}</p>
      <span className="pgc-tag">{program.tag}</span>
    </div>
  );
}

export default function ProgramsGrid() {
  return (
    <Section className="prog-sec">
      <div className="sec-inner">
        <div className="center">
          <div className="kicker">What We Offer</div>
          <h2 className="display dark"> <em>
            The ScholarGrab</em> <em>Guidance Program</em>
          </h2>
        </div>
        <div className="prog-grid">
          {programs.map((p) => (
            <ProgramCard key={p.num} program={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}