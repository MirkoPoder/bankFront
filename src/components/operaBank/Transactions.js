import React from "react";
import { Component } from "react";
import "../../../src/index.css";

class Transactions extends Component {
  state = {
    isLoading: true,
    Transactions: [],
  };

  async componentDidMount() {
    const response = await fetch(
      `/transactions/${sessionStorage.getItem("accountNumber")}`
    );
    const body = await response.json();
    this.setState({ Transactions: body, isLoading: false });
  }

  render() {
    const { Transactions, isLoading } = this.state;
    if (isLoading) return <div>Loading...</div>;
    return (
      <div className="container">
        <div className="py-5 text-center">
          <h2>Transactions</h2>
        </div>
        <div className="row">
          <a
            href="/accounts"
            className="btn btn-primary btn-sm"
            onClick={sessionStorage.removeItem("accountNumber")}
          >
            Back
          </a>
          <table className="table col-md-12 order-md-1">
            <thead>
              <tr className="col-md-12 order-md-1">
                <th>#</th>
                <th>Transfer from</th>
                <th>Transfer to</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {Transactions.map((Transaction, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{Transaction.accountNumberFrom}</td>
                  <td>{Transaction.accountNumberTo}</td>
                  <td>{Transaction.description}</td>
                  <td>{Transaction.amount}</td>
                </tr>
              ))}
              <tr className="col-md-12 order-md-1">
                <th></th>
                <th></th>
                <th></th>
                <th className="text-right">Balance:</th>
                <th>{sessionStorage.getItem("balance")}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Transactions;
