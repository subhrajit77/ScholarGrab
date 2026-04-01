import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="foot-inner">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="fn-lg">
              Scholar<span>Grab</span>
            </div>
            <p>
              Trusted Career Guidance Platform for JEE &amp; NEET students in
              Northeast India. Free scholarships, mentorship &amp; structured support.
            </p>
          </div>

          <div className="foot-col">
            <h5>Navigate</h5>
            <Link to="/about">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/vision">Our Vision</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/register">Register</Link>
          </div>

        

          <div className="foot-col">
            <h5>Contact</h5>
            <a href="#">Northeast India</a>
            <a href="mailto:support@scholargrab.in">scholargrab@gmail.com</a>
            <a href="tel:+919678077280">+91 96780 77280</a>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© 2026 ScholarGrab. All rights reserved.</p>
          <p>Free guidance. Zero fee. Real results.</p>
        </div>
      </div>
    </footer>
  );
}