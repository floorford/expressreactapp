// Keeping this code seperate from the renderer code just so ensure the files are neat and manageable

// create redux store, hook up middleware into app
import { createStore, applyMiddleware } from "redux";

// handle async action creators
import thunk from "redux-thunk";

import reducers from "../client/reducers";

// not importing Provider as the sole purpose is to create the redux store,
// not use it inside the react app as well

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
};
