import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";
import {
  FaHome,
  FaSearch,
  FaBell,
  FaSignOutAlt,
  FaShoppingBag,
} from "react-icons/fa";
import "../styles/Topbar.css";

function Topbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart?.items || []);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const displayName = user
    ? user.firstName
      ? `${user.firstName} ${user.lastName || ""}`
      : user.email
    : "Administrator";

  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="topbar">
      <div className="topbar-left">
        <Link to="/" className="topbar-home-btn" title="Back to Landing Page">
          <FaHome size={14} />
          <span>PulseAdmin Home</span>
        </Link>

        <div className="topbar-search">
          <FaSearch className="topbar-search-icon" />
          <input
            type="text"
            placeholder="Search catalog, users, records..."
          />
        </div>
      </div>

      <div className="topbar-right">
        {/* Cart Quick Shortcut */}
        <Link to="/my-cart" className="topbar-icon-btn" title="View Cart">
          <FaShoppingBag size={14} />
          {cartItems.length > 0 && (
            <span className="topbar-badge">{cartItems.length}</span>
          )}
        </Link>

        {/* Notifications */}
        <button
          className="topbar-icon-btn"
          title="Notifications"
          aria-label="Notifications"
        >
          <FaBell size={14} />
          <span className="topbar-notification-dot"></span>
        </button>

        {/* Profile Chip */}
        <Link to="/profile" className="topbar-profile" title="View Profile">
          <div className="topbar-avatar">{initials}</div>
          <div className="topbar-profile-info">
            <span className="topbar-name">{displayName}</span>
            <span className="topbar-role">Super Admin</span>
          </div>
        </Link>

        {/* Logout */}
        <button
          className="topbar-logout-btn"
          onClick={handleLogout}
          title="Sign out of Admin session"
        >
          <FaSignOutAlt size={13} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default Topbar;
