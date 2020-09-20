import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Clock from "./components/Clock";
import Dashboard from "./components/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Clock /> */}
      <App />
    </BrowserRouter>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById("root")
);
