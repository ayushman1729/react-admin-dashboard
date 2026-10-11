import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaUtensils,
  FaClipboardList,
  FaTasks,
  FaQuoteRight,
  FaComments,
  FaShoppingBag,
  FaFire,
} from "react-icons/fa";
import "../styles/Sidebar.css";

const navSections = [
  {
    title: "Overview",
    items: [
      { path: "/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
    ],
  },
  {
    title: "Commerce & Sales",
    items: [
      { path: "/products", icon: <FaBoxOpen />, label: "Products" },
      { path: "/carts", icon: <FaShoppingCart />, label: "Orders & Carts" },
      { path: "/my-cart", icon: <FaShoppingBag />, label: "My Cart" },
      { path: "/users", icon: <FaUsers />, label: "Customers" },
    ],
  },
  {
    title: "Content & CMS",
    items: [
      { path: "/posts", icon: <FaClipboardList />, label: "Posts & News" },
      { path: "/recipes", icon: <FaUtensils />, label: "Recipes" },
      { path: "/comments", icon: <FaComments />, label: "Comments" },
      { path: "/todos", icon: <FaTasks />, label: "Tasks & Todos" },
      { path: "/quotes", icon: <FaQuoteRight />, label: "Quotes" },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Brand Header */}
      <div className="sidebar-header">
        <div className="logo">
          <FaFire size={18} />
        </div>
        <div>
          <h2>PulseAdmin</h2>
          <p>Enterprise Console</p>
        </div>
      </div>

      {/* Structured Sections */}
      <nav className="sidebar-menu">
        {navSections.map((section, idx) => (
          <div key={idx} className="sidebar-section">
            <span className="sidebar-section-title">{section.title}</span>
            <div className="sidebar-section-items">
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "menu-item active" : "menu-item"
                  }
                >
                  <span className="menu-icon">{item.icon}</span>
                  <span className="menu-label">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Sidebar Footer Indicator */}
      <div className="sidebar-footer-badge">
        <span className="status-dot"></span>
        <span>Connected to Live API</span>
      </div>
    </aside>
  );
}

export default Sidebar;
