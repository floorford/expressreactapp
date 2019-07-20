import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

// function that takes a string and escapes characters involved with setting up script attacks
import serialize from "serialize-javascript";
import Routes from "../client/Routes";

//export single function which will render our app and return it as string
export default (req, store, context) => {
  // rendering home to component as a string to pass to user's browser
  const content = renderToString(
    // StaticRouter requires the context variable to work
    // the current path it needs to consider if passed is in the index.js file request object
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // tell browser it needs to download the bundle.js file inside the public directory,
  // whilst displaying the initial content
  // public is the first place the server will look hence why we haven't had to add anymore directories to the src
  return `
      <html>
          <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
          </head>
          <body>
              <div id="root">${content}</div>
              <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
              </script>
              <script src="bundle.js"></script>
          </body>
      </html>`;
};

// JSON stringify the store state otherwise get [Object object]
