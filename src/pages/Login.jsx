import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/auth/authSlice";

function Login() {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // const { login } = useContext(AuthContext);
const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDemoLogin = () => {
    const demoUser = {
      firstName: "Ayush",
      lastName: "Admin",
      email: "admin@devhub.com",
      role: "Super Admin",
    };
    localStorage.setItem("user", JSON.stringify(demoUser));
    localStorage.setItem("isLoggedIn", "true");
    dispatch(login(demoUser));
    navigate("/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!formData.email || !formData.password) {
      setError("Please enter email and password.");
      return;
    }
    if (!savedUser) {
      setError("No account found. Please register first.");
      // navigate("/register");
      return;
    }

    if (
      formData.email === savedUser.email &&
      formData.password === savedUser.password
    ) {
      setError("");
     dispatch(login(savedUser));
     localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="bg-gradient-primary min-vh-100">
      <div className="container">
        {/* 
        <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                          {error && (
                            <small className="text-danger ml-3">{error}</small>
                          )}
                        </div>

                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block font-weight-bold"
                        >
                          Login
                        </button>
                        <hr />
                        <button
                          type="button"
                          className="btn btn-success btn-user btn-block font-weight-bold shadow-sm"
                          onClick={handleDemoLogin}
                        >
                          <i className="fas fa-bolt mr-2"></i> 1-Click Demo Admin Login
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to="/forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/register">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
