import path from 'path'
import express from 'express'
import webpack from 'webpack'
import config from '../webpack/webpack.dev.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import projectsApi from './api/projects'
import blogApi from './api/blog'

const app = express()
const compiler = webpack(config)
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
})
const hotMiddleware = webpackHotMiddleware(compiler)

app.use(devMiddleware)
app.use(hotMiddleware)

app.use('/api/projects', projectsApi)
app.use('/api/blog', blogApi)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

app.listen(3000, () => {
  console.log('Development server running at localhost:3000')
})
