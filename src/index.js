import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Clock from "./components/Clock";
import Dashboard from "./components/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Clock />
    <Dashboard />
  </React.StrictMode>,
  document.getElementById("root")
);
