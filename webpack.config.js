const path = require('path')

module.exports = {
  mode: 'production',
  entry: './lib/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    port: 3000,
    watchContentBase: true
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devtool: 'sourcemap'
}
