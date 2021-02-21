import React from "react";
import { Component } from "react";
import "../../../src/index.css";
import Welcome from "./Welcome";

class Clients extends Component {

  state = {
    isLoading: true,
    Customers: [],
  };

  async componentDidMount() {
    const response = await fetch(`/customers`);
    const body = await response.json();
    this.setState({ Customers: body, isLoading: false });
  }

  render() {
    const { Customers, isLoading } = this.state;
    if (isLoading) return <div>Lodading...</div>;
    return (
      <div className="container">


        <Welcome />
        <div className="py-5 text-center">
          <h2>Clients</h2>
        </div>
        <div className="row">
          <a href="/addclient" className="btn btn-primary">
            Add client
          </a>
          <table className="table col-md-12 order-md-1">
            <thead>
              <tr className="col-md-12 order-md-1">
                <th>#</th>
                <th>First</th>
                <th>Last</th>
            {/*     <th>Username</th> */}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.first_name}</td>
                  <td>{customer.last_name}</td>
                  <td>{customer.username}</td>
                  <td><button className="btn btn-primary" 
                  onClick= {() => {
                    window.location.href = `/editclient/${customer.id}`;
                    sessionStorage.setItem("id", customer.id)}}
                    >Edit client</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

/*function Clients() {
  const data = [
    {
      id: 1,
      firstname: "ants",
      lastname: "karu",
      username: "karuants",
      age: 23,
    },
    {
      id: 2,
      firstname: "mati",
      lastname: "mets",
      username: "matimets",
      age: 78,
    },
  ];

  return (
    <div className="container">
      <Welcome />
      <div className="py-5 text-center">
        <h2>Clients</h2>
      </div>
      <div className="row">
        <a href="/addclient" className="btn btn-primary">
          Add client
        </a>
        <table className="table col-md-12 order-md-1">
          <thead>
            <tr className="col-md-12 order-md-1">
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
*/
export default Clients;
