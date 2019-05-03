// root file for application on the server

// boilerplate code to listen on 3000 and create a small express server for that port
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

// telling express to use the public directory as a freely accessable public directory
app.use(express.static("public"));

// Route handler to listen to the root route of our application
// if anyone make a GET request to root, run this function
app.get("/", (req, res) => {
  // rendering home to component as a string to pass to user's browser
  const content = renderToString(<Home />);

  // tell browser it needs to download the bundle.js file inside the public directory,
  // whilst displaying the initial content
  // public is the first place the server will look hence why we haven't had to add anymore directories to the src
  const html = `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>`;

  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on Port 3000!");
});
