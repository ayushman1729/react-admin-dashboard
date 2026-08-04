import "../styles/Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-header">
            <span className="section-tag">CONTACT</span>

            <h2>Let's Connect</h2>

            <p>
              Have a question or want to collaborate? Feel free to connect with
              me.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h4>Email</h4>
              <a href="mailto:ayushman7310@gmail.com">ayushman@gmail.com</a>
            </div>

            <div className="contact-card">
              <FaGithub className="contact-icon" />
              <h4>GitHub</h4>
              <a
                href="https://github.com/ayushman1729"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ayushman1729
              </a>
            </div>

            <div className="contact-card">
              <FaLinkedin className="contact-icon" />
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/ayushman1729"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/ayushman1729
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Contact;
