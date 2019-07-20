import React from "react";
import { renderRoutes } from "react-router-config";
import { fetchCurrentUser } from "./actions";

import Header from "./components/Header";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

// because the loadData function is so small here, instead of writing it out as a seperate function and passing
// it through we are doing it in one single line
export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
