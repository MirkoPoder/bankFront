import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/operaBank/Login";
import Accounts from "./components/operaBank/Accounts";
import Register from "./components/operaBank/Register";
import CreateAccount from "./components/operaBank/CreateAccount";
import { PageNotFound } from "./components/visualComponents/ErrorComponents";
import { UserNotFound } from "./components/visualComponents/UserNotFound";
import Logout from "./components/operaBank/Logout";
import Transfer from "./components/operaBank/Transfer";
import Withdraw from "./components/operaBank/Withdraw";
import Deposit from "./components/operaBank/Deposit";
import Transactions from "./components/operaBank/Transactions";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/accounts" component={Accounts} />
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/logout" component={Logout} />
          <Route path="/usernotfound" component={UserNotFound} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
