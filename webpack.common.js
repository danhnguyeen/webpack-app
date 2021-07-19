const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // devtool: false,
  entry: {
    main: "./src/index.js", // the input file path that webpack will run in the first time
    vendor: "./src/vendor.js",
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  }
}