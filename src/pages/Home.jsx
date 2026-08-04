import "../styles/Home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-left">
            <span className="hero-badge">React Admin Dashboard</span>

            <h1>
              Manage Everything <br />
              From One <span>Dashboard</span>
            </h1>

            <p>
              DEVHUB is a modern admin dashboard built with React, Bootstrap and
              DummyJSON REST APIs. Manage Products, Users, Posts, Recipes,
              Comments and more from one place.
            </p>

            <div className="hero-buttons">
              <Link to="/dashboard" className="btn btn-primary">
                Explore Dashboard
              </Link>

             
               <a 
                href="https://github.com/ayushman1729"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark"
              >
                GitHub
              </a>
             
             
            </div>
          </div>

          <div className="hero-right">
            <div className="preview-card">
              <img src="/img2.png" alt="img" className="preview-image" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
