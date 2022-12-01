import * as Yup from "yup";

export const loginSchema = Yup.object({
  login_id: Yup.string()
    .email("* Please enter a valid email")
    .required("* Email is required"),
  login_password: Yup.string()
    .required("* Password is required")
    .min(8, "password must contain 8 or more characters"),
});
