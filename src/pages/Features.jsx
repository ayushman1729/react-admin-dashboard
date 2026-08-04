import "../styles/Features.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaClipboardList,
  FaUtensils,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBoxOpen />,
    title: "Products",
    desc: "Complete product management with CRUD operations.",
  },
  {
    icon: <FaUsers />,
    title: "Users",
    desc: "Manage users, profiles and permissions easily.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Carts",
    desc: "Track shopping carts and customer orders.",
  },
  {
    icon: <FaClipboardList />,
    title: "Posts",
    desc: "Create, update and manage blog posts.",
  },
  {
    icon: <FaUtensils />,
    title: "Recipes",
    desc: "Organize recipes with beautiful layouts.",
  },
  {
    icon: <FaComments />,
    title: "Comments",
    desc: "Moderate user comments efficiently.",
  },
];

function Features() {
  return (
    <>
      <Navbar />

      <section className="features-page">
        <div className="container">

          <div className="heading">
            <span>OUR FEATURES</span>

            <h1>Powerful Features for Modern Admin Dashboard</h1>

            <p>
              Everything you need to manage products, users, orders and content
              from one beautiful dashboard.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((item, index) => (
              <div className="feature-card" key={index}>

                <div className="icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                

              </div>
            ))}
          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Features;