import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import pic from "../Logo/pic.png";
import appicon from "../Logo/appicon.png";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import "../Style/SignUp.css";
import leftarr from "../Logo/leftarrow.png";
import google from "../Logo/google.png";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src={appicon} alt="" id="" />
            <span>Todolist</span>
            <img src={pic} className="img-fluid" alt="Phone image" />
          </div>
          <div id="signdiv" className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <img src={leftarr} alt="" id="leftarr" />
            <span>
              Already have an account <Link to="/">Sign In</Link>{" "}
            </span>

            <form onSubmit={handleSubmit}>
              <h2>Sign Up to</h2>
              <p>
                <h2>get organized</h2>{" "}
              </p>

              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  placeholder="Your Full Name "
                  required
                />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  placeholder="Your Email "
                  required
                />
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  minLength={8}
                  id="form1Example23"
                  className="form-control form-control-lg"
                  placeholder="Your Password"
                  required
                />
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}
              </div>
              {/* Submit button */}
              <button
                id="submit"
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Create Account
              </button>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
              <button
                id="createbtn2"
                type="button"
                className="btn btn-primary btn-lg"
              >
                <img src={google} alt="" />
                Sign up with google
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
