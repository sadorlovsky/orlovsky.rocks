var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var cssnext = require('postcss-cssnext')
var fontMagician = require('postcss-font-magician')
var postcssImport = require('postcss-import')
var lost = require('lost')

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'node_modules', 'react-icons')],
        loader: 'babel-loader'
      },
      {
        test: /\.sss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?parser=sugarss')
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false
       }
    }),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    })
  ]
}
