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
} from "react-icons/fa";
import "../styles/Sidebar.css";

const menuItems = [
  { path: "/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
  { path: "/products", icon: <FaBoxOpen />, label: "Products" },
  { path: "/users", icon: <FaUsers />, label: "Users" },
  { path: "/carts", icon: <FaShoppingCart />, label: "Carts" },
  // {
  //   path: "/my-cart",
  //   icon: <FaShoppingCart />,
  //   label: "My Cart",
  // },
  { path: "/recipes", icon: <FaUtensils />, label: "Recipes" },
  { path: "/posts", icon: <FaClipboardList />, label: "Posts" },
  { path: "/todos", icon: <FaTasks />, label: "Todos" },
  { path: "/quotes", icon: <FaQuoteRight />, label: "Quotes" },
  { path: "/comments", icon: <FaComments />, label: "Comments" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">DH</div>

        <div>
          <h2>DEVHUB</h2>
          <p>Admin Panel</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
