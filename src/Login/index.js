import React from "react";
import "./style.css";

const Login = () => {

  return (
    <div className="container">
      <form>
        <div className="card">
          <h3 className="card-header">Sign in</h3>
          <div>
            <div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  name="emailId"
                  placeholder="Email"
                ></input>
                <>
                </>
              </div>
              <div>
                <label>Password</label>
                <input
                  name="Password"
                  placeholder="Password"
                  type="password"
                ></input>
                <>
                </>
              </div>
              <div>
                <div className="checkbox">
                  <label>
                    {" "}
                    <input
                      type="checkbox"
                      name="rememberMe"
                    />{" "}
                    Remember me?{" "}
                  </label>
                </div>
              </div>
              <div>
                <button>Sign in</button>
              </div>
              <div className="additional-links-container">
                <a href="#">Forgot Your Password?</a>
                <span>
                  Don't have an account? <a href="#">Sign up</a>
                </span>
                <a href="#">Resend email confirmation</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
