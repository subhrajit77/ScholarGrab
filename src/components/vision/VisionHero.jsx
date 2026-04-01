import Section from "../common/Section.jsx";

const approachItems = [
  {
    title: "Our Approach to Schools & Institutions",
    text: [
      "We actively connect with schools and educational institutions to support students preparing for NEET and JEE through structured guidance, mentorship, and academic support. Our approach is designed to complement the existing academic system by providing students with additional clarity, direction, and awareness about their preparation journey.",
      "Through seminars, interactive sessions, and continuous engagement, we help students understand their goals, improve their study approach, and make informed academic decisions. We focus on building a support system that extends beyond the classroom, ensuring that students receive consistent guidance and mentorship throughout their preparation.",
      "By working closely with schools and institutions, we aim to contribute to the overall development of students and help improve academic outcomes in a structured and sustainable manner."
    ]
  },
  {
    title: "Our Approach to CSR & NGOs",
    text: [
      "We actively approach CSR-driven initiatives and NGOs that are focused on education and student empowerment to expand the reach of our guidance platform. As an independent initiative, our objective is to connect with organizations that share a common vision of supporting students and improving access to quality guidance.",
      "Through these efforts, we aim to build meaningful associations that enable us to reach a wider group of students who may not have access to proper mentorship and academic support. Our approach focuses on creating a structured system where students can benefit from guidance, mentorship, and relevant resources throughout their preparation journey.",
      "By engaging with CSR programs and NGOs, we aim to gradually scale our impact and ensure that more students receive reliable and consistent support. This approach allows us to strengthen the overall ecosystem of student guidance while maintaining our focus on accessibility, quality, and long-term academic outcomes."
    ]
  },
  {
    title: "Our Approach to Students",
    text: [
      "We focus on supporting students preparing for NEET and JEE by providing structured guidance, mentorship, and continuous academic support throughout their preparation journey. Our approach is designed to help students gain clarity in their goals, understand the right preparation strategies, and make informed decisions about their academic path.",
      "We engage with students through seminars, community platforms, and regular interactions, ensuring they remain connected with mentors and receive consistent guidance. Our system is built to identify serious and committed aspirants and provide them with focused mentorship based on their individual needs and performance.",
      "Through personalized mentoring, peer group learning, and continuous monitoring, we aim to create a disciplined and supportive environment where students can improve their preparation and stay aligned with their goals.",
      "Our objective is to ensure that every student receives the right direction, access to reliable resources, and the support required to achieve better academic outcomes and succeed in competitive exams."
    ]
  }
];

export default function VisionHero() {
  return (
    <>
      <Section className="ph tex">
        <div className="ph-inner">
          <div className="ph-deco">V</div>

          <h1>
            Our Vision <em>and</em> Approach
          </h1>

          <p>
            Our vision is to build a trusted and accessible student guidance
            platform that supports aspirants preparing for NEET and JEE with the
            right mentorship, direction, and academic support. We aim to ensure
            that every student, regardless of background, has access to reliable
            guidance and the resources needed to make informed decisions about
            their future.
          </p>

          <p className="vision-hero-sub">
            We envision creating a structured ecosystem where students can
            connect with mentors, gain clarity in their preparation, and improve
            their overall academic outcomes. Through continuous support and a
            focused approach, we aim to contribute to the growth and success of
            students across different stages of their preparation journey.
          </p>

          <div className="breadcrumb">
            <span>Home</span>
            <span className="sep">/</span>
            <span className="cur">Vision</span>
          </div>
        </div>
      </Section>

      <Section className="vision-approach-sec">
        <div className="sec-inner">

          <div className="vision-approach-grid">
            {approachItems.map((item) => (
              <div className="vision-approach-card" key={item.title}>
                <h3>{item.title}</h3>
                {item.text.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}