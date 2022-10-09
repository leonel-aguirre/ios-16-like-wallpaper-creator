const path = require("path")
const { HotModuleReplacementPlugin } = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = {
  output: {
    publicPath: "./",
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
  },
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
    }),
  ],
}
