import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
/* eslint import/default: "off" */
import config from '../../webpack/webpack.config.dev'

const app = express()
const compiler = webpack(config)
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
})
const hotMiddleware = webpackHotMiddleware(compiler)

app.use(devMiddleware)
app.use(hotMiddleware)
app.use(express.static(path.resolve('public')))

app.get('/*', (_, res) => {
  console.log(path.resolve())
  res.sendFile(path.resolve('public', 'index.html'))
})

app.listen(3000, () => {
  console.log('Development server running at localhost:3000')
})
