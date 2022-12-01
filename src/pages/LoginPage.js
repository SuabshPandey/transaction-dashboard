import React from "react";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={`${styles.login_main_div}`}>
      <div className={`${styles.login_div}`}>
        <h1 className={`${styles.login_heading}`}>Login</h1>
        <input
          type="text"
          placeholder="Enter your email"
          className={`${styles.login_input}`}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className={`${styles.login_input}`}
        />
        <button className={`${styles.login_btn}`}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
