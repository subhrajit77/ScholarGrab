import Section from "../common/Section.jsx";

const cards = [
  { icon: "🎓", title: "Every Student Guided",   text: "From Class 9 to dropper year — structured support at every stage of the JEE and NEET journey." },
  { icon: "🗺️", title: "All 8 States Covered",   text: "Deep reach across Assam, Manipur, Nagaland, Meghalaya, Tripura, Arunachal, Mizoram, and Sikkim." },
  { icon: "💯", title: "Zero Cost Always",        text: "The platform, mentorship, scholarships, and study materials — all free, always, no exceptions." },
  { icon: "🏅", title: "Results That Speak",      text: "We measure success only by students who crack their target exams and join premier institutions." },
  { icon: "🤝", title: "Community of Toppers",    text: "A growing network of IIT and AIIMS alumni mentoring the next generation from the same region." },
  { icon: "📡", title: "Reach Every District",    text: "Long-term goal to have an active ScholarGrab mentor pair in every district of Northeast India." }
];

export default function VisionCards() {
  return (
    <Section className="challenges tex">
      <div className="sec-inner">
        <div className="center">
          <div className="kicker">What We&apos;re Building</div>
          <h2 className="display">
            Six Pillars of <em>Our Vision</em>
          </h2>
        </div>
        <div className="vc-grid">
          {cards.map((c) => (
            <div key={c.title} className="vc">
              <div className="vc-ico">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}