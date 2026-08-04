import "../styles/About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function About() {
  return (
<>
<Navbar/>
    <section className="about" id="about">
      <div className="container about-container">

        <div className="about-left">

          <span className="section-tag">
            ABOUT PROJECT
          </span>

          <h2>
            Built with Modern
            <span> React Technologies</span>
          </h2>

          <p>
            DEVHUB is a modern React Admin Dashboard built for learning
            and real-world practice. It demonstrates authentication,
            routing, CRUD operations, API integration, responsive UI,
            search, pagination, and reusable components using
            industry-standard technologies.
          </p>

          <div className="about-list">

            <div className="about-item">
              ✅ Authentication & Protected Routes
            </div>

            <div className="about-item">
              ✅ CRUD Operations with DummyJSON API
            </div>

            <div className="about-item">
              ✅ Responsive Bootstrap UI
            </div>

            <div className="about-item">
              ✅ Search, Pagination & Routing
            </div>

          </div>

        </div>

        <div className="about-right">

          <div className="about-card">

            <h3>Project Highlights</h3>

            <div className="highlight">
              <span>⚛ React</span>
              <span>Reusable Components</span>
            </div>

            <div className="highlight">
              <span>🌐 REST API</span>
              <span>DummyJSON Integration</span>
            </div>

            <div className="highlight">
              <span>🔐 Authentication</span>
              <span>Protected Dashboard</span>
            </div>

            <div className="highlight">
              <span>📱 Responsive UI</span>
              <span>Bootstrap 5</span>
            </div>

          </div>

        </div>

      </div>
    </section>

    <Footer/>
  </>
  );
}

export default About;