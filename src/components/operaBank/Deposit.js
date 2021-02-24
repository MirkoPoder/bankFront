import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../visualComponents/MyTextInput";
import * as Yup from "yup";
import { Component } from "react";

class Deposit extends Component {
  async componentDidMount() {
    const response = await fetch(
      `/accounts/${sessionStorage.getItem("username")}/${sessionStorage.getItem("accountNumber")}`
    );
    const body = await response.json();
    this.setState({ Accounts: body, isLoading: false });
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      Accounts: {
        id: this.id,
        accountNumber: this.accountNumber,
        balance: this.balance,
        bank: this.bank,
      },
    };
  }

  render() {
    const { Accounts, isLoading } = this.state;
    if (isLoading) return <div>Loading...</div>;
    return (
      <Formik
        initialValues={{
          id: Accounts.id,
          accountNumber: Accounts.accountNumber,
          balance: Accounts.balance,
          bank: Accounts.bank,
          amount: 0,
        }}
        validationSchema={Yup.object({
          accountNumber: Yup.string().required("Required"),
          balance: Yup.number().required("Required"),
          bank: Yup.string().required("Required"),
          amount: Yup.number().required("Required"),
        })}
        onSubmit={(values) => {
          sessionStorage.removeItem("accountNumber");
          setTimeout(async () => {
            await fetch(`/deposit`, {
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
                <h2>Deposit money</h2>
              </div>
              <div className="col-md-12 order-md-1">
                <div className="mb-3">
                  <MyTextInput
                    label="Account number"
                    name="accountNumber"
                    disabled="false"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <MyTextInput
                    label="Balance"
                    name="balance"
                    disabled="true"
                    type="number"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <MyTextInput
                    label="Bank"
                    name="bank"
                    disabled="true"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <MyTextInput
                    label="Deposit amount"
                    name="amount"
                    type="number"
                    className="form-control"
                  ></MyTextInput>
                </div>
                <hr className="mb4" />
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm btn-block"
                  >
                    {props.isSubmitting ? "processing..." : "Deposit"}
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

export default Deposit;
