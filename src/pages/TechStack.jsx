import "../styles/TechStack.css";

import { FaReact, FaBootstrap, FaCss3Alt, FaRoute } from "react-icons/fa";
import Footer from "../components/Footer";
import { SiJavascript, SiAxios, SiVite } from "react-icons/si";
import Navbar from "../components/Navbar";

const techs = [
  {
    icon: <FaReact />,
    title: "React",
    desc: "Component-based frontend library.",
  },
  {
    icon: <SiVite />,
    title: "Vite",
    desc: "Fast development build tool.",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    desc: "Responsive UI framework.",
  },
  {
    icon: <SiJavascript />,
    title: "JavaScript",
    desc: "Core programming language.",
  },
  {
    icon: <SiAxios />,
    title: "Axios",
    desc: "Promise-based HTTP client.",
  },
  {
    icon: <FaRoute />,
    title: "React Router",
    desc: "Client-side routing.",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    desc: "Modern styling & layouts.",
  },
  {
    icon: "🌐",
    title: "DummyJSON API",
    desc: "REST API for practice projects.",
  },
];

function TechStack() {
  return (
    <>
      <Navbar />
      <section className="tech-stack" id="tech">
        <div className="container">
          <div className="section-title">
            <span>TECH STACK</span>

            <h2>Built With Modern Technologies</h2>

            <p>
              DEVHUB is powered by modern frontend technologies used in
              real-world React applications.
            </p>
          </div>

          <div className="tech-grid">
            {techs.map((tech) => (
              <div className="tech-card" key={tech.title}>
                <div className="tech-icon">{tech.icon}</div>

                <h4>{tech.title}</h4>

                <p>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TechStack;
