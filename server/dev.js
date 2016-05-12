import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack/webpack.dev.config'
import blogApi from './api/blog'

const app = express()
const compiler = webpack(config)
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
})
const hotMiddleware = webpackHotMiddleware(compiler)

app.use(devMiddleware)
app.use(hotMiddleware)

app.use('/api/blog', blogApi)

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

app.listen(3000, () => {
  console.log('Development server running at localhost:3000')
})
