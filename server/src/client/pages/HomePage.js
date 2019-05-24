// home component that appears on the root request
//NB: using ES2015 module syntax (import)
import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm the BEST home component</div>
      <button onClick={() => console.log("Hi There!")}>Press Me</button>
    </div>
  );
};

export default {
  component: Home
};
