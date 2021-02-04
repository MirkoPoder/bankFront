import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../someComponents/MyTextInput";
import MySelect from "../someComponents/MySelect";
import * as Yup from "yup";

function AddClient() {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        address: "",
        country: "",
      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(40, "Must be 40 characters or less")
          .required("Required"),
        lastname: Yup.string()
          .min(3, "Must be atleast 3 characters")
          .max(40, "Must be 40 characters or less")
          .required("Required"),
        username: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(40, "Must be 40 characters or less")
          .required("Required"),
        email: Yup.string().required("Required"),
        address: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(100, "Must be 100 characters or less")
          .required("Required"),
        country: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(20, "Must be 40 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setTimeout(
          async () => {
            resetForm();
            setSubmitting(false);
          },
          3000
          // (window.location.href = `/clients`)
        );
      }}
    >
      {(props) => (
        <Form>
          <div className="container">
            <div className="py-5 text-center">
              <h2>Add Client</h2>
            </div>
            <div className="col-md-12 order-md-1">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <MyTextInput
                    label="First name"
                    name="firstname"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <MyTextInput
                    label="Last name"
                    name="lastname"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="mb-3">
                <MyTextInput
                  label="Username"
                  name="username"
                  placeholder="Username"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <MyTextInput
                  label="E-mail"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <MyTextInput
                  label="Address"
                  name="address"
                  placeholder="1234 Main St"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>Country</label>
                <MySelect
                  label="Country"
                  name="country"
                  className="custom-select d-block w-100"
                >
                  <option value="">Choose...</option>
                  <option value="estonia">Estonia</option>
                  <option value="latvia">Latvia</option>
                  <option value="lithuania">Lithuania</option>
                  <option value="finland">Finland</option>
                  <option value="sweden">Sweden</option>
                </MySelect>
              </div>
              <hr className="mb4" />
              <div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  {props.isSubmitting ? "adding..." : "Add client"}
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddClient;
