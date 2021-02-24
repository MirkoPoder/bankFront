import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../visualComponents/MyTextInput";
import * as Yup from "yup";
import { Component } from "react";

class Transfer extends Component {
  async componentDidMount() {
    const response = await fetch(
      `/accounts/${sessionStorage.getItem("username")}/${sessionStorage.getItem("accountNumber")}`
    );
    const body = await response.json();
    this.setState({ Transfer: body, isLoading: false });
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      Transfer: {
        id: this.id,
        firstname: this.firstname,
        lastname: this.lastname,
        accountNumberFrom: this.accountNumber,
        balance: this.balance,
        accountNumberTo: this.destinationAccountNumber,
        amount: this.amount,
      },
    };
  }

  render() {
    const { Transfer, isLoading } = this.state;
    if (isLoading) return <div>Lodading...</div>;
    return (
      <Formik
        initialValues={{
          id: Transfer.id,
          firstname: Transfer.firstname,
          lastname: Transfer.lastname,
          accountNumberFrom: Transfer.accountNumber,
          balance: Transfer.balance,
          accountNumberTo: 0,
          amount: 0,
          description: "Transaction from another account",
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
          accountNumberFrom: Yup.string().required("Required"),
          balance: Yup.number().required("Required"),
          accountNumberTo: Yup.string().required("Required"),
          amount: Yup.number().required("Required"),
          description: Yup.string()
            .required("Required")
            .max(40, "Must be 40 characters or less"),
        })}
        onSubmit={(values) => {
          sessionStorage.removeItem("accountNumber");
          setTimeout(async () => {
            await fetch(`/transfer`, {
              method: "PUT",
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
                <h2>Transfer money</h2>
              </div>
              <div className="col-md-12 order-md-1">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <MyTextInput
                      label="First name"
                      name="firstname"
                      type="text"
                      disabled="true"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <MyTextInput
                      label="Last name"
                      name="lastname"
                      type="text"
                      disabled="true"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <MyTextInput
                    label="Transfer from"
                    name="accountNumberFrom"
                    placeholder="Account to make transfer from..."
                    type="text"
                    disabled="true"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <MyTextInput
                    label="Balance"
                    name="balance"
                    type="text"
                    disabled="true"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <MyTextInput
                    label="Transfer to"
                    type="text"
                    name="accountNumberTo"
                    className="form-control"
                  ></MyTextInput>
                </div>
                <div className="mb-3">
                  <MyTextInput
                    label="Amount"
                    name="amount"
                    type="number"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <MyTextInput
                    label="Description"
                    name="description"
                    type="text"
                    className="form-control"
                  />
                </div>
                <hr className="mb4" />
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm btn-block"
                  >
                    {props.isSubmitting ? "transferring..." : "Transfer"}
                  </button>
                  <a
                    href="/accounts"
                    className="btn btn-secondary btn-sm btn-block"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default Transfer;
