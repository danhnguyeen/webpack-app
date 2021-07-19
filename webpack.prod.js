const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production", // by default, the mode is production
  // use the same entry in webpack.common.js
  // entry: "./src/index.js", // the input file path that webpack will run in the first time
  output: {
    filename: "[name].[contenthash].bundle.js", // the name of the file after building
    path: path.resolve(__dirname, "build"), //define the path of building folder, default is dist
    clean: true,
    assetModuleFilename: "./imgs/[name].[contenthash].[ext]", // define the path and name of assets files
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css'})],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Extract css into files
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
});
