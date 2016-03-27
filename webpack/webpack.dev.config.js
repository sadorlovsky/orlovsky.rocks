var path = require('path')
var webpack = require('webpack')
var cssnext = require('postcss-cssnext')
var fontMagician = require('postcss-font-magician')
var postcssImport = require('postcss-import')
var lost = require('lost')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
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
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.sss$/,
        loader: 'style-loader?sourceMap!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader?parser=sugarss'
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
    new webpack.HotModuleReplacementPlugin()
  ]
}
