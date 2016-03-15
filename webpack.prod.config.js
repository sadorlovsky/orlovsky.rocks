var path = require('path')
var webpack = require('webpack')
var cssnext = require('postcss-cssnext')
var fontMagician = require('postcss-font-magician')
var lost = require('lost')

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.sss$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader?parser=sugarss'
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
  postcss: function () {
    return [cssnext, fontMagician, lost]
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
    })
  ]
}
