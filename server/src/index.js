// root file for application on the server

// boilerplate code to listen on 3000 and create a small express server for that port
import "babel-polyfill"; // a module which polyfills helper functions babel assumes are loaded in
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";

const app = express();

// telling express to use the public directory as a freely accessable public directory
app.use(express.static("public"));

// Route handler to listen to the root route of our application
// if anyone makes a GET request to root, run this function
// * tells express to accept all routes and just pass on to react router
app.get("*", (req, res) => {
  const store = createStore();

  // logic to initialise and load data into the store
  // the routes array, and the path the user is attempting to visit
  // returns an array of components to be rendered, and the promises they're making to the API
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    // passing in store means all loadData function have reference to server side redux store
    return route.loadData ? route.loadData(store) : null;
  });

  // Promise.all only returns a single promise once it's been resolved therefore it's a good
  // way to test if the redux loop has returned with the fetchec data and therefore we can render the app
  Promise.all(promises).then(() => {
    // req (request object) contains the path the user is trying to access, so need to pass to StaticRouter
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening on Port 3000!");
});
