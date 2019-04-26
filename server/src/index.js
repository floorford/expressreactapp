// root file for application on the server

// boilerplate code to listen on 3000 and create a small express server for that port
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

// Route handler to listen to the root route of our application
// if anyone make a GET request to root, run this function
app.get("/", (req, res) => {
  // rendering home to component as a string to pass to user's browser
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(3000, () => {
  console.log("Listening on Port 3000!");
});
