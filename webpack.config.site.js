const base = require('./webpack.config');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const obj = Object.assign({}, base, {
  entry: './site/index.tsx',
  output: {
    path: path.resolve(__dirname, 'static-site'),
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: "dune 组件库",
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
});
module.exports = obj
