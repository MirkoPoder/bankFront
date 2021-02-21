import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../visualComponents/MyTextInput";
import MySelect from "../visualComponents/MySelect";
import * as Yup from "yup";
import { Component } from "react";
//import Clients from "./Clients";

class EditClient extends Component {

  async componentDidMount() {
    const response = await fetch(`/clients/${sessionStorage.getItem("id")}`);
    const body = await response.json();
    this.setState({ Clients: body, isLoading: false });
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      Clients: {
        id: this.id,
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        email: this.email,
        address: this.address,
        country: this.country
      },
    };
  }

  render() {
    const { Clients, isLoading } = this.state;
    if (isLoading) return <div>Lodading...</div>;
    return (
      <Formik
         initialValues={{
          id: Clients.id,
          firstname: Clients.firstname,
          lastname: Clients.lastname,
          username: Clients.username,
          email: Clients.email,
          address: Clients.address,
          country: Clients.country,
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
        onSubmit={(values) => {
          sessionStorage.removeItem('id')
          setTimeout(async () => {
            await fetch(`/clients/${Clients.id}`, {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...values }),
              
            });
            
            this.props.history.push("/clients");
          }, 3000);
          
        }}
      >
        {(props) => (
          <Form>
            <div className="container">
              <div className="py-5 text-center">
                <h2>Edit Client</h2>
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
                    {props.isSubmitting ? "editing..." : "Edit client"}
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

export default EditClient;
