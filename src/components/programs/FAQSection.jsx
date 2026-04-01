import { useState } from "react";
import Section from "../common/Section.jsx";
import faqs from "../../data/faqs.js";

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`fi ${open ? "open" : ""}`}>
      <div className="fq" onClick={() => setOpen(!open)}>
        {faq.question}
        <span className="farr">▼</span>
      </div>
      <div className="fa">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <Section className="faq-sec">
      <div className="faq-inner">
        <div className="center">
          <div className="kicker">Frequently Asked</div>
          <h2 className="display dark">
            Got <em>Questions?</em>
          </h2>
          <p className="prose dark center">
            Everything you need to know before you register.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </div>
      </div>
    </Section>
  );
}