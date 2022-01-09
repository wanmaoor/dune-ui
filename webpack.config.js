const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    dune: './lib/index.tsx'
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'dune-ui',
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "dune 组件库",
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}
