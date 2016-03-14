var path = require('path')
var webpack = require('webpack')
var cssnext = require('postcss-cssnext')
var fontMagician = require('postcss-font-magician')
var lost = require('lost')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
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
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.sss$/,
        loader: 'style-loader?sourceMap!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader?parser=sugarss'
      }
    ]
  },
  postcss: function () {
    return [cssnext, fontMagician, lost]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new webpack.optimize.UglifyJsPlugin({
    //    compress: {
    //      warnings: false
    //    }
    // })
  ]
}
