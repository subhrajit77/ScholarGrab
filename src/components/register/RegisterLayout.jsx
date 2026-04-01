import Section from "../common/Section.jsx";
import RegisterPerks from "./RegisterPerks.jsx";
import RegisterForm from "./RegisterForm.jsx";

export default function RegisterLayout() {
  return (
    <Section className="reg-sec">
      <div className="reg-inner">
        <div className="reg-left">
          <RegisterPerks />
      
        </div>
        <RegisterForm />
      </div>
    </Section>
  );
}