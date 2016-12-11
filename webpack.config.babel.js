import {
  createConfig,
  entryPoint,
  setOutput,
  env,
  sourceMaps,
  webpack,
  addPlugins
} from '@webpack-blocks/webpack'
import babel from '@webpack-blocks/babel6'
import devServer, { reactHot } from '@webpack-blocks/dev-server'

const development = [
  entryPoint([
    'react-hot-loader/patch',
    './src/client/index.js'
  ]),
  sourceMaps(),
  devServer(),
]

const production = [
  entryPoint('./src/client/index.js'),
  addPlugins([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ])
]

export default createConfig([
  entryPoint([
    'react-hot-loader/patch',
    './src/client/index.js'
  ]),
  setOutput({
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/static/'
  }),
  babel(),
  addPlugins([
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env || 'development')
    })
  ]),
  env('development', development),
  env('production', production)
])
