// Start up code for the client side application

import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

// rendering this react onto the same div the server side react was rendered to (called hydration)
ReactDOM.hydrate(<Home />, document.getElementById("root"));
