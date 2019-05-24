import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

export default [
  {
    ...HomePage,
    path: "/",
    exact: true
  },
  {
    ...UsersListPage,
    path: "/users"
  }
];

// we're exporting our components and loadData function as whole objects so we can spread them into these
// route config objects to save nameSpace issues with multiple loadData functions and to save code
