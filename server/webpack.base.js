module.exports = {
  // tell wepback to run babel on every file it runs through - should be same on client and server
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
