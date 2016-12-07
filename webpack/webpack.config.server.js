const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/server/prod',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'server.bundle.js'
  },
  target: 'node',
  externals: fs.readdirSync(path.resolve(__dirname, '..', 'node_modules')).concat([
    'react-dom/server'
  ]).reduce((ext, mod) => {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader?name=static/images/[name].[ext]'
      }
    ]
  }
}
