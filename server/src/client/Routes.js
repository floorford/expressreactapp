import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";

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
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

// we're exporting our components and loadData function as whole objects so we can spread them into these
// route config objects to save nameSpace issues with multiple loadData functions and to save code

// 404 not found page is pathless, route router knows to show this when no route is passed in or if it can't match any paths!
