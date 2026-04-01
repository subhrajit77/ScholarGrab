import { useState } from "react";

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="reg-card sbox">
        <div className="sico">✅</div>
        <h3>Form Submitted!</h3>
        <p>
          Thank you for registering with ScholarGrab. Our team will review
          your details and contact you within 48 hours with your next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="reg-card">
      <div className="urg">Limited Slots · Priority to Need-based Students</div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          <div className="field">
            <label>Full Name</label>
            <input required type="text" name="name" placeholder="Your full name" />
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input required type="tel" name="phone" placeholder="+91 XXXXX XXXXX" />
          </div>

          <div className="field">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="you@example.com" />
          </div>

          <div className="field">
            <label>State (Northeast)</label>
            <select required name="state">
              <option value="">Select your state</option>
              <option>Assam</option>
              <option>Manipur</option>
              <option>Nagaland</option>
              <option>Meghalaya</option>
              <option>Tripura</option>
              <option>Arunachal Pradesh</option>
              <option>Mizoram</option>
              <option>Sikkim</option>
            </select>
          </div>

          <div className="field">
            <label>Target Exam</label>
            <select required name="exam">
              <option value="">Select exam</option>
              <option>JEE</option>
              <option>NEET</option>
              <option>Both JEE &amp; NEET</option>
            </select>
          </div>

          <div className="field">
            <label>Current Class</label>
            <select required name="class">
              <option value="">Select class</option>
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>
              <option>Dropper (Repeating Year)</option>
            </select>
          </div>

          <div className="field full">
            <label>School / College Name</label>
            <input type="text" name="school" placeholder="Name of your school or college" />
          </div>

          <div className="field full">
            <label>Annual Family Income</label>
            <select required name="income">
              <option value="">Select income range</option>
              <option>Below ₹2,00,000</option>
              <option>₹2,00,000 – ₹5,00,000</option>
              <option>₹5,00,000 – ₹8,00,000</option>
              <option>Above ₹8,00,000</option>
            </select>
          </div>

          <div className="field full">
            <label>Current Preparation Status</label>
            <input
              type="text"
              name="prep"
              placeholder="E.g. Self-study, coaching, just starting..."
            />
          </div>

          <div className="field full">
            <label>Anything else we should know?</label>
            <input
              type="text"
              name="note"
              placeholder="Challenges, goals, specific needs..."
            />
          </div>

          <button type="submit" className="sub-btn">
            Submit Registration — It&apos;s Free
          </button>

          <p className="fn">
            By submitting, you agree to be contacted via phone, WhatsApp, or
            email for guidance &amp; scholarship support. No spam, ever.
          </p>
        </div>
      </form>
    </div>
  );
}