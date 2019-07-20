import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

// no path tied to the App component means it always renders
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...UsersListPage,
        path: "/users"
      }
    ]
  }
];

// we're exporting our components and loadData function as whole objects so we can spread them into these
// route config objects to save nameSpace issues with multiple loadData functions and to save code
