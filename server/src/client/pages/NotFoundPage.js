import React from "react";

// context renamed to staticContext by StaticRouter
// wont exist on client side as StaticRouter only exists on the server (browserRouter on the server)
// so needs a default value
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Oops! Page not found :(</h1>;
};

export default { component: NotFoundPage };
