const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const fontMagician = require('postcss-font-magician')
const postcssImport = require('postcss-import')
const lost = require('lost')

module.exports = {
  output: {
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
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
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
}