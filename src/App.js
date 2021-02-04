import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/sriniApp/Login";
import Clients from "./components/sriniApp/Clients";
import AddClient from "./components/sriniApp/AddClient";
import { PageNotFound } from "./components/someComponents/ErrorComponents";
import Logout from "./components/sriniApp/Logout";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/clients" component={Clients} />
          <Route path="/addclient" component={AddClient} />
          <Route path="/logout" component={Logout} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
