const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const path = require("path");

module.exports = merge(common, {
  mode: "production", // by default, the mode is production
  // use the same entry in webpack.common.js
  // entry: "./src/index.js", // the input file path that webpack will run in the first time
  output: {
    filename: "main.[contenthash].js", // the name of the file after building
    path: path.resolve(__dirname, "build"), //define the path of building folder, default is dist
  },
});
