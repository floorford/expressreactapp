const path = require("path");

module.exports = {
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

  // tell wepback to run babel on every file it runs through
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
