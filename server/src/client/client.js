// Start up code for the client side application

import "babel-polyfill"; // a module which polyfills helper functions babel assumes are loaded in

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";

// create redux store, hook up middleware into app
import { createStore, applyMiddleware } from "redux";

// handle async action creators
import thunk from "redux-thunk";

// ties our store and react app together
import { Provider } from "react-redux";

import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

// rendering this react onto the same div the server side react was rendered to (called hydration)
ReactDOM.hydrate(
  // hard coded to expect an address so we can only use this on client side
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
