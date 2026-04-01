import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function close() { setOpen(false); }

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/about" className="logo" onClick={close}>
         <img src={logo} alt="ScholarGrab Logo" />
            <div className="logo-word">Scholar<span>Grab</span></div>
          </Link>

          <ul className="nav-ul">
            <li><NavLink to="/about">Home</NavLink></li>
            <li><NavLink to="/vision">Vision</NavLink></li>
            <li><NavLink to="/programs">Programs</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </ul>

          <div className="nav-right">
            <Link to="/register" className="nav-btn" onClick={close}>Free Guidance</Link>
            <button className="nav-ham" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <span className={`ham-line ${open ? "open" : ""}`} />
              <span className={`ham-line ${open ? "open" : ""}`} />
              <span className={`ham-line ${open ? "open" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mob-menu ${open ? "mob-open" : ""}`}>
        <ul className="mob-ul">
          <li><NavLink to="/about"         onClick={close}>Home</NavLink></li>
          <li><NavLink to="/about"    onClick={close}>About</NavLink></li>
          <li><NavLink to="/vision"   onClick={close}>Vision</NavLink></li>
          <li><NavLink to="/programs" onClick={close}>Programs</NavLink></li>
          <li><NavLink to="/register" onClick={close}>Register</NavLink></li>
        </ul>
        <Link to="/register" className="mob-cta" onClick={close}>
          Register for Free
        </Link>
      </div>

      {open && <div className="mob-overlay" onClick={close} />}
    </>
  );
}