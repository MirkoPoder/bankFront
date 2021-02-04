import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store";
import Footer from "./components/sriniApp/Footer";
import NavBar from "./components/sriniApp/NavBar";

ReactDOM.render(
  <Provider store={store}>
    <NavBar />
    <App />
    <Footer />
  </Provider>,
  document.getElementById("root")
);
