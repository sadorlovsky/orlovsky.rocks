module.exports = {
  output: {
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.sss$/,
        loader: 'style-loader?sourceMap!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader?parser=sugarss'
      }
    ]
  }
}
