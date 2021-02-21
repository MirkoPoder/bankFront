import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginFormik from "./components/operaBank/Login";
import Clients from "./components/operaBank/Clients";
import AddClient from "./components/operaBank/AddClient";
import { PageNotFound } from "./components/visualComponents/ErrorComponents";
import Logout from "./components/operaBank/Logout";
import EditClient from "./components/operaBank/EditClient";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={LoginFormik} />
          <Route path="/customers" component={Clients} />
          <Route path="/addclient" component={AddClient} />
          <Route path="/editclient" component={EditClient} />
          <Route path="/logout" component={Logout} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
