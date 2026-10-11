import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="container-fluid text-center d-flex flex-column justify-content-center align-items-center min-vh-100 py-5">
      <div className="error mx-auto" data-text="404" style={{ fontSize: "7rem", fontWeight: 800, color: "#5a5c69" }}>
        404
      </div>
      <p className="lead text-gray-800 mb-4" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
        Page Not Found
      </p>
      <p className="text-gray-500 mb-4" style={{ maxWidth: "450px" }}>
        It looks like you found a glitch in the matrix... The page you requested could not be found.
      </p>
      <Link to="/" className="btn btn-primary px-4 py-2">
        <i className="fas fa-arrow-left mr-2"></i> Back to Home
      </Link>
    </div>
  );
}

export default Error404;
