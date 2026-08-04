import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
} from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <h2>
            DEV<span>HUB</span>
          </h2>

          <p>
            A modern React Admin Dashboard built for learning,
            portfolio projects and real-world practice.
          </p>

        </div>

        <div className="footer-links">

          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>
          <Link to="/tech-stack">Tech Stack</Link>
          <Link to="/contact">Contact</Link>

        </div>

        <div className="footer-social">

          <h4>Connect</h4>

          <a
            href="https://github.com/ayushman1729"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/ayushman1729"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a href="mailto:ayushman7310@gmail.com">
            <FaEnvelope /> Email
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 DEVHUB • Built with <FaReact /> React
        </p>

      </div>

    </footer>
  );
}

export default Footer;