import React from "react";
import { Component } from "react";
import "../../../src/index.css";
import Welcome from "./../visualComponents/Welcome";

class Accounts extends Component {
  state = {
    isLoading: true,
    Clients: [],
  };

  async componentDidMount() {
    const response = await fetch(
      `/accounts/${sessionStorage.getItem("username")}`
    );
    const body = await response.json();
    this.setState({ Accounts: body, isLoading: false });
  }

  render() {
    const { Accounts, isLoading } = this.state;
    if (isLoading) return <div>Loading...</div>;
    return (
      <div className="container">
        <Welcome />
        <div className="py-5 text-center">
          <h2>Accounts</h2>
        </div>
        <div className="row">
          <a href="/createaccount" className="btn btn-sm btn-primary">
            Create account
          </a>
          <table className="table col-md-12 order-md-1">
            <thead>
              <tr className="col-md-12 order-md-1">
                <th>#</th>
                <th>Owner</th>
                <th>Bank</th>
                <th>Account number</th>
                <th>Balance</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Accounts.map((account) => (
                <tr key={account.id}>
                  <td>{account.id}</td>
                  <td>
                    {account.firstname} {account.lastname}
                  </td>
                  <td>{account.bank}</td>
                  <td>
                    <h6
                      className="btn-link"
                      onClick={() => {
                        window.location.href = `/transactions/${account.accountNumber}`;
                        sessionStorage.setItem("accountNumber",account.accountNumber);
                        sessionStorage.setItem("balance", account.balance);
                      }}
                    >
                      {account.accountNumber}
                    </h6>
                  </td>
                  <td>{account.balance} €</td>
                  <td>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => {
                        window.location.href = `/transfer`;
                        sessionStorage.setItem("accountNumber",account.accountNumber);
                      }}
                    >
                      Transfer
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={() => {
                        window.location.href = `/withdraw`;
                        sessionStorage.setItem("accountNumber",account.accountNumber);
                      }}
                    >
                      Withdraw
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={() => {
                        window.location.href = `/deposit`;
                        sessionStorage.setItem("accountNumber",account.accountNumber);
                      }}
                    >
                      Deposit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Accounts;
