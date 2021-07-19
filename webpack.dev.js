const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const path = require("path");

module.exports = merge(common, {
  mode: "development", // by default, the mode is production
  output: {
    filename: "[name].bundle.js", // the name of the file after building
    path: path.resolve(__dirname, "build"), //define the path of building folder, default is dist
  },
});
