import Section from "../common/Section.jsx";
import challenges from "../../data/challenges.js";

function ChallengeCard({ challenge }) {
  return (
    <div className="chal">
      <div className="chal-n">{challenge.num}</div>
      <h3>{challenge.title}</h3>
      <p>{challenge.text}</p>
    </div>
  );
}

export default function ChallengesSection() {
  return (
    <Section className="challenges tex">
      <div className="sec-inner">
        <div className="center">
          <div className="kicker" style={{ color: "#ef4444" }}>
            The Problem We Solve
          </div>
          <h2 className="display">
            Challenges Students <em>Shouldn&apos;t</em> Face
          </h2>
          <p className="prose center" style={{ color: "#9ca3af" }}>
            The barriers are real — but every single one is solvable with the
            right support system.
          </p>
        </div>
        <div className="chal-grid">
          {challenges.map((c) => (
            <ChallengeCard key={c.num} challenge={c} />
          ))}
        </div>
      </div>
    </Section>
  );
}