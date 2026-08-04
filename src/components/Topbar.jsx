import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import {FaHome, FaSearch, FaBell, FaChevronDown, FaUserCircle, FaSignOutAlt} from "react-icons/fa";
import "../styles/Topbar.css";

function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
  logout();
  navigate("/login", { replace: true });
};
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const savedUser = JSON.parse(localStorage.getItem("user"));

  //   if (savedUser) {
  //     setUser(savedUser);
  //   }
  // }, []);
const {user, logout}= useContext(AuthContext);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <Link to="/" className="home-btn">
          <FaHome />
          <span>Home</span>
        </Link>

        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="topbar-right">
        <button className="icon-btn">
          <FaBell />
        </button>

        <Link to="/profile" className="profile">
          <FaUserCircle className="profile-icon" />

          <div>
            <h5>{user ? `${user.firstName} ${user.lastName}` : "Guest"}</h5>
            <p>Administrator</p>
          </div>

          <FaChevronDown />
        </Link>
        <button className="btn btn-danger" onClick={handleLogout}>
          <FaSignOutAlt className="me-2" />
          Logout
        </button>
      </div>
    </header>
  );
}

export default Topbar;
