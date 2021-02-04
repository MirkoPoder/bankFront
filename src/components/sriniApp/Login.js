import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../someComponents/MyTextInput";
import * as Yup from "yup";

function Login() {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(25, "Must be 25 characters or less")
          .required("Required"),
        password: Yup.string()
          .min(8, "Must be atleast 8 characters")
          .max(40, "Must be 40 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(
          async () => {
            console.log(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          },
          3000,
          (window.location.href = `/clients`)
        );
        console.log(values);
        sessionStorage.setItem("username", values.username);
        //       window.location.href = `/clients/${values.username}`
      }}
    >
      {(props) => (
        <Form>
          <div className="py-5 text-center">
            <h2 className="font-weight-bold">SRINI</h2>
          </div>
          <div className="mb-3">
            <MyTextInput
              label="Username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <MyTextInput
              label="Password"
              name="password"
              type="password"
              className="form-control"
            />
          </div>
          <hr className="mb4" />
          <div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              {props.isSubmitting ? "loading..." : "Log in"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default Login;
