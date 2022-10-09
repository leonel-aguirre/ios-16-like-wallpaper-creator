const path = require("path")
const { merge } = require("webpack-merge")

const commonConfig = require("./webpack.common")

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    port: 4040,
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    open: true,
    hot: true,
  },
})
