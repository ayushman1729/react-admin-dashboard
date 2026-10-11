import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { useSelector } from "react-redux";
import "../styles/Navbar.css";

function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <nav className="navbar-custom">
      <div className="container navbar-container">
        <Link to="/" className="brand-logo">
          <div className="brand-icon-box">
            <FaFire size={18} />
          </div>
          <span className="brand-name">
            Pulse<span className="brand-highlight">Admin</span>
          </span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/tech-stack">Tech Stack</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-buttons">
          {!isLoggedIn ? (
            <Link to="/login" className="btn btn-outline-primary">
              Sign In
            </Link>
          ) : (
            <Link to="/dashboard" className="btn btn-primary">
              Go to Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
