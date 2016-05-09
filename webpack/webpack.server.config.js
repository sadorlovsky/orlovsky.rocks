const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssnext = require('postcss-cssnext')
const fontMagician = require('postcss-font-magician')
const postcssImport = require('postcss-import')
const lost = require('lost')

module.exports = {
  entry: './server/prod',
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
        test: /\.sss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?parser=sugarss')
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader?name=static/images/[name].[ext]'
      }
    ]
  },
  postcss (_webpack) {
    return [
      postcssImport({
        addDependencyTo: _webpack
      }),
      cssnext,
      fontMagician,
      lost
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true
    })
  ]
}
