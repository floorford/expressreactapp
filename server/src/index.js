// root file for application on the server

// boilerplate code to listen on 3000 and create a small express server for that port
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

// telling express to use the public directory as a freely accessable public directory
app.use(express.static("public"));

// Route handler to listen to the root route of our application
// if anyone makes a GET request to root, run this function
// * tells express to accept all routes and just pass on to react router
app.get("*", (req, res) => {
  const store = createStore();

  // PLACEHOLDER: some logic to initialise and load data into the store

  // req (request object) contains the path the user is trying to access, so need to pass to StaticRouter
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("Listening on Port 3000!");
});
