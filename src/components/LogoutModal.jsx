function LogoutModal() {

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    // navigate("/login");
      window.location.href = "/login";

  };

  return (
    <div
      className="modal fade"
      id="logoutModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Ready to Leave?
            </h5>
            <button
              className="close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            Select "Logout" below if you are ready to end your current session.
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
