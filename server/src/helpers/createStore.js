// Keeping this code seperate from the renderer code just so ensure the files are neat and manageable

import axios from "axios";
// create redux store, hook up middleware into app
import { createStore, applyMiddleware } from "redux";

// handle async action creators
import thunk from "redux-thunk";

import reducers from "../client/reducers";

// not importing Provider as the sole purpose is to create the redux store,
// not use it inside the react app as well
export default req => {
  // our special server instance of axios - will automatically prepend the baseURL onto our requests from the server!
  // how we intervene with the proxy!
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: { cookie: req.get("cookie") || "" } // incase no cookie attached it wont be undefined
  });

  // we need to pass in browser request object into here so we can take the cookie off and append to axios instance
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};
