import React from "react";
import { useField } from "formik";
import styles from "./text.module.css";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={`${styles.form_label}`}>{label}</label>
      <input
        className={`form-control ${styles.form_fields}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <>
          <small className={`${styles.form_errors} form-text`}>
            {meta.error}
          </small>
        </>
      ) : null}
    </>
  );
};

export default TextField;
