import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const {user}=useContext(AuthContext);

  if (!user) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Profile</h1>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            User Information
          </h6>
        </div>

        <div className="card-body">
          <div className="mb-3">
            <strong>First Name:</strong> {user.firstName}
          </div>

          <div className="mb-3">
            <strong>Last Name:</strong> {user.lastName}
          </div>

          <div className="mb-3">
            <strong>Email:</strong> {user.email}
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Profile;