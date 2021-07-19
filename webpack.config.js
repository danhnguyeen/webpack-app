const path = require('path');

module.exports = {
  mode: "development", // by default, the mode is production
  // devtool: false,
  entry: "./src/index.js", // the input file path that webpack will run in the first time
  output: {
    filename: "main.js", // the name of the file after building
    path: path.resolve(__dirname, 'build') //define the path of building folder, default is dist
  },
}