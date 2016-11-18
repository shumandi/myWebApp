var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map', //配置生成Source Maps，选择合适的选项
  entry: __dirname + "/client/main.js",
  output: {
    path: __dirname + "/public/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel' //在webpack的module部分的loaders里进行配置即可
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss' //添加对样式表的处理
      }
    ]
  },
  postcss: [
    require('autoprefixer') //调用autoprefixer插件
  ]
}
