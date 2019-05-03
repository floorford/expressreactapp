const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // inform webpack that we are building a bundle for node.js rather than for the browser
  // (will slightly change it's behaviour and not pull in native modules)
  target: "node",

  // tell webpack the root file of our server application - the entry point
  entry: "./src/index.js",

  // tell wepback where to put the output file it generates (the bundle.js file)
  output: {
    filename: "bundle.js",
    // using the path module helper from node.js runtime
    // dirname refers to current working directory our project is executed in, creating a folder called build in there
    path: path.resolve(__dirname, "build")
  },

  // tells webpack not to bundle any libraries into the server bundle.js if library exists in node-modules folder
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
