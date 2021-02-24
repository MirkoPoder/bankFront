import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../visualComponents/MyTextInput";
import * as Yup from "yup";
import { Component } from "react";

class Register extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(40, "Must be 40 characters or less")
            .required("Required"),
          password: Yup.string()
            .min(3, "Must be atleast 3 characters")
            .max(40, "Must be 40 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          setTimeout(async () => {
            await fetch(`/createUser`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...values }),
            });

            this.props.history.push("/");
          }, 2000);
        }}
      >
        {(props) => (
          <Form>
            <div className="container">
              <div className="py-5 text-center">
                <h2 className="font-weight-bold">Sign up</h2>
              </div>
              <div className="col-md-12 order-md-1">
                <div className="mb-3">
                  <MyTextInput
                    placeholder="Username"
                    name="username"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <MyTextInput
                    placeholder="Password"
                    name="password"
                    type="password"
                    className="form-control"
                  />
                </div>
                <hr className="mb4" />
                <div>
                  <button
                    type="submit"
                    name="signup"
                    className="btn btn-primary btn-sm btn-block"
                  >
                    {props.isSubmitting ? "Saving your details..." : "Sign up"}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default Register;
