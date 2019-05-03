const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
  // tell webpack the root file of our client application - the entry point
  // normally this would also be called index.js - just called client for course clarity
  entry: "./src/client/client.js",

  // tell wepback where to put the output file it generates (the bundle.js file)
  output: {
    filename: "bundle.js",
    // using the path module helper from node.js runtime
    // dirname refers to current working directory our project is executed in,
    // creating a folder called public in there
    path: path.resolve(__dirname, "public")
  }
};

module.exports = merge(baseConfig, config);
