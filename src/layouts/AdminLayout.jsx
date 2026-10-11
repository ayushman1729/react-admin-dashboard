import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LogoutModal from "../components/LogoutModal";

function AdminLayout() {
  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <Outlet />
        </div>

        <Footer />
      </div>

      <ScrollToTop />
      <LogoutModal />
    </div>
  );
}

export default AdminLayout;