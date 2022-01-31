import React from "react";
import "./style.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loggIn } from "../controller/loginController";

const Login = () => {
  const initialValues = { emailId: "", Password: "", rememberMe: false };
  const validationSchema = yup.object({
    emailId: yup
      .string()
      .required("Email Id is Required"),
    Password: yup.string().required("Password is Required"),
    rememberMe: yup.boolean(),
  });

  const onSubmit = (values) => {
    //hitting the serviceCall in the Login Controller
    loggIn(values)
      .then((res) => {
        //Added a dummy toaster Message
        toast.success("Login Successfull", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.warn("Login Failed", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
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
                  <label className="light-txt">
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
                <button>Sign in</button>
              </div>
              <div className="additional-links-container">
                <a href="#">Forgot Your Password?</a>
                <span className="light-txt">
                  Don't have an account? <a href="#">Sign up</a>
                </span>
                <a href="#">Resend email confirmation</a>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
