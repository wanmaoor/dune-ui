const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config');

module.exports = Object.assign({}, base, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: "dune 组件库",
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
});
