// Start up code for the client side application

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

// rendering this react onto the same div the server side react was rendered to (called hydration)
ReactDOM.hydrate(
  // hard coded to expect an address so we can only use this on client side
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
