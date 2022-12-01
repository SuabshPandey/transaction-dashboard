import React, { useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import TextField from "../common/formikComponents/TextField";
import styles from "./login.module.css";
import axiosInstance from "../auth/axiosInstance.js";
import { loginSchema } from "../schemas/loginSchema";

const LoginPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    login_id: "",
    login_password: "",
  };
  return (
    <div className={`${styles.login_main_div}`}>
      <div className={`${styles.login_card}`}>
        <div className={styles.logo_image_div}>
          <img
            className={`${styles.logo_img}`}
            src="/citytech-logo.webp"
            alt="logo"
          />
        </div>
        <div className={`${styles.login_div}`}>
          <h1 className={`${styles.login_heading}`}>Login</h1>
          <div className={`${styles.login_row} row`}>
            <Formik
              initialValues={initialValues}
              onSubmit={async (values, { resetForm }) => {
                setIsLoading(true);
                try {
                  const response = await axiosInstance.post(
                    "/config/v1/auths/login",
                    values,
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  if (response.status === 200) {
                    console.log("Login successful", response);
                    console.log("TOken", response.data.data[0].jwt_token);
                    localStorage.setItem(
                      "token",
                      response.data.data[0].jwt_token
                    );
                    setIsLoading(false);
                    resetForm();
                    navigate("/dashboard");
                  }
                } catch (err) {
                  if (err.response.status === 403) {
                    console.log("Invalid credentials");
                    setIsLoading(false);
                    resetForm();
                  }
                }
                resetForm();
              }}
              validationSchema={loginSchema}
            >
              {({ values, handleChange, handleSubmit, isValid }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      type="email"
                      name="login_id"
                      label="Username"
                      value={values.login_id}
                      onChange={handleChange}
                    />
                    <TextField
                      type="password"
                      name="login_password"
                      label="Password"
                      value={values.login_password}
                      onChange={handleChange}
                    />
                    <button
                      disabled={!isValid || isLoading}
                      type="submit"
                      className={`${styles.login_btn}`}
                    >
                      Login
                    </button>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
