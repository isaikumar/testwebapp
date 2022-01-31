import React from "react";
import "./style.css";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  const initialValues = { emailId: "", Password: "", rememberMe: false };
  const validationSchema = yup.object({
    emailId: yup
      .string()
      .email("Enter A valid Email Id")
      .required("Email Id is Required"),
    Password: yup.string().required("Password is Required"),
    rememberMe: yup.boolean(),
  });

  const onSubmit = (values) => {

  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
//Formik Intilization by passing intialvalues and validation and submitHandling
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
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
                  {...formik.getFieldProps("emailId")}
                ></input>
                {formik.touched.emailId && formik.errors.emailId ? (
                  <span className="error">Email Id is Required</span>
                ) : (
                  ""
                )}
                <>
                </>
              </div>
              <div>
                <label>Password</label>
                <input
                  name="Password"
                  placeholder="Password"
                  type="password"
                  {...formik.getFieldProps("Password")}
                ></input>
                {formik.touched.Password && formik.errors.Password ? (
                  <span className="error">Password is Required</span>
                ) : (
                  ""
                )}
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
                      {...formik.getFieldProps("rememberMe")}
                    />{" "}
                    Remember me?{" "}
                  </label>
                </div>
              </div>
              <div>
                <button type="button">Sign in</button>
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
