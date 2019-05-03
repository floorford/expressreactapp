const path = require("path");

module.exports = {
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
  },

  // tell wepback to run babel on every file it runs through
  // config should generally be the same across server and client
  module: {
    rules: [
      {
        test: /\.js?$/, // regex to find only the js files
        loader: "babel-loader",
        exclude: /node_modules/, // regex tells webpack not to run babel over files in certain directories
        options: {
          // rules used by babel to transpile our code
          presets: [
            "react", // take JSX and convert to JS
            "stage-0", // handles async code
            ["env", { targets: { browsers: ["last 2 versions"] } }]
            // master preset - run all transpile rules needed the last 2 versions of all popular browsers
          ]
        }
      }
    ]
  }
};
