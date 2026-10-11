import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGithub,
  FaChartLine,
  FaBoxOpen,
  FaUsers,
  FaCheckCircle,
  FaFire,
  FaShieldAlt,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Home() {
  const [activeTab, setActiveTab] = useState("30d");

  return (
    <>
      <Navbar />

      <section id="hero" className="hero">
        <div className="container">
          {/* Left Column: Hero Copy */}
          <div className="hero-left">
            <span className="hero-badge">
              <FaFire className="me-2" /> Next-Gen React 19 Admin Engine
            </span>

            <h1>
              Engineered for Speed. <br />
              Powered by <span>PulseAdmin</span>.
            </h1>

            <p>
              A high-performance enterprise dashboard built with React 19, Redux Toolkit,
              and live REST services. Monitor real-time sales, manage product inventories,
              and process transactions with microsecond reactivity.
            </p>

            <div className="hero-buttons">
              <Link to="/dashboard" className="btn btn-primary btn-lg shadow-sm">
                Open Live Dashboard <FaArrowRight className="ms-2" size={14} />
              </Link>

              <a
                href="https://github.com/ayushman1729/react-admin-dashboard"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark btn-lg"
              >
                <FaGithub className="me-2" /> View GitHub Repo
              </a>
            </div>

            <div className="hero-highlights">
              <span><FaCheckCircle className="text-danger me-2" /> 10+ REST API Endpoints</span>
              <span><FaShieldAlt className="text-danger me-2" /> Route Guard Auth</span>
              <span><FaChartLine className="text-danger me-2" /> Real-time Visualizations</span>
            </div>
          </div>

          {/* Right Column: Handcrafted Live Interactive UI Preview Widget (No Fake Image!) */}
          <div className="hero-right">
            <div className="interactive-preview-card">
              {/* Window Header */}
              <div className="preview-window-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="window-url-bar">
                  https://pulseadmin.dev/dashboard/analytics
                </div>
              </div>

              {/* Window Content */}
              <div className="preview-window-body">
                {/* Metric Summary Header */}
                <div className="preview-header-stats">
                  <div>
                    <span className="preview-meta-label">Total Monthly Revenue</span>
                    <h3 className="preview-revenue-number">$142,850.00</h3>
                  </div>
                  <div className="preview-growth-badge">
                    +24.6% <FaChartLine className="ms-1" size={12} />
                  </div>
                </div>

                {/* Period Selector Tabs */}
                <div className="preview-tab-row">
                  {["7d", "30d", "90d"].map((tab) => (
                    <button
                      key={tab}
                      className={`preview-tab-btn ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      Last {tab.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Sparkline Visual Bar Chart Simulation */}
                <div className="preview-bars-chart">
                  {[45, 60, 35, 80, 55, 95, 70, 85, 60, 100, 80, 92].map((height, i) => (
                    <div key={i} className="bar-wrapper" title={`Day ${i + 1}: ${height}%`}>
                      <div
                        className="bar-fill"
                        style={{
                          height: `${height}%`,
                          backgroundColor: i === 11 || i === 9 ? "#e11d48" : "#cbd5e1",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Live Activity Row */}
                <div className="preview-live-transactions">
                  <div className="preview-tx-header">
                    <span>Recent Transactions</span>
                    <span className="live-pulse-indicator">Live</span>
                  </div>

                  <div className="preview-tx-item">
                    <div className="tx-icon-box">
                      <FaBoxOpen color="#e11d48" />
                    </div>
                    <div className="tx-info">
                      <strong>Wireless Gaming Headset</strong>
                      <span>Order #10892 • Express Shipping</span>
                    </div>
                    <span className="tx-badge success">Delivered</span>
                    <span className="tx-price">$129.99</span>
                  </div>

                  <div className="preview-tx-item">
                    <div className="tx-icon-box">
                      <FaUsers color="#0284c7" />
                    </div>
                    <div className="tx-info">
                      <strong>Enterprise Tier License</strong>
                      <span>Customer #842 • Annual Plan</span>
                    </div>
                    <span className="tx-badge processing">Processed</span>
                    <span className="tx-price">$899.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
