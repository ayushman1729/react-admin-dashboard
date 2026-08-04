import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useSelector } from "react-redux";
function Navbar() {
 const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <nav className="navbar-custom">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <span className="logo-text">
            DEV<span className="logo-blue">HUB</span>
          </span>
        </Link>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/tech-stack">Tech Stack</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>

        <div className="nav-buttons">
          {!isLoggedIn && (
            <Link to="/login" className="btn btn-outline-primary">
              Login
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/dashboard" className="btn btn-primary">
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
