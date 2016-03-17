var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var cssnext = require('postcss-cssnext')
var fontMagician = require('postcss-font-magician')
var postcssImport = require('postcss-import')
var lost = require('lost')

module.exports = {
  entry: './server/prod',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },
  target: 'node',
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server'
  ]).reduce(function(ext, mod) {
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
  postcss: function (webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack
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
