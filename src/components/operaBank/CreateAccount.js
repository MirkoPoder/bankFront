import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../visualComponents/MyTextInput";
import MySelect from "../visualComponents/MySelect";
import * as Yup from "yup";
import { Component } from "react";

class AddClient extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          id: "",
          firstname: "",
          lastname: "",
          accountNumber: "",
          balance: "",
          bank: "",
          username: sessionStorage.getItem("username"),
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
          accountNumber: Yup.string().required("Required"),
          balance: Yup.number().required("Required"),
          bank: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          setTimeout(async () => {
            await fetch(`/createAccount`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },

              body: JSON.stringify({ ...values }),
            });
            this.props.history.push("/accounts");
          }, 2000);
        }}
      >
        {(props) => (
          <Form>
            <div className="container">
              <div className="py-5 text-center">
                <h2>Create Bank Account</h2>
              </div>
              <div className="col-md-12 order-md-1">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <MyTextInput
                      label="First name"
                      name="firstname"
                      placeholder="Account owner's given name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <MyTextInput
                      label="Last name"
                      name="lastname"
                      placeholder="Account owner's family name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <MyTextInput
                    label="Account number"
                    name="accountNumber"
                    placeholder="Desired account number"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <MyTextInput
                    label="Balance"
                    name="balance"
                    placeholder="Balance on opening account"
                    type="number"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <MySelect
                    label="Bank"
                    name="bank"
                    className="custom-select d-block w-100"
                  >
                    <option value="">Choose...</option>
                    <option value="SEB">SEB</option>
                    <option value="Swedbank">Swedbank</option>
                    <option value="LHV">LHV</option>
                    <option value="Luminor">Luminor</option>
                  </MySelect>
                </div>
                <hr className="mb4" />
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm btn-block"
                  >
                    {props.isSubmitting ? "Creating..." : "Create"}
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

export default AddClient;
