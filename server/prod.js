import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import express from 'express'
import routes from '../src/routes'
import store from '../src/store'
import projectsApi from './api/projects'

const app = express()

app.use('/static', express.static('dist'))
app.use('/api/projects', projectsApi)

const renderPage = (appHtml, initialState) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/png" href="/favicon.png">
      <link href="/static/app.css" rel="stylesheet" />
      <title>Sad Orlovsky</title>
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
   `
}

/* eslint complexity: "off" */
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = renderToString(
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
      )
      const initialState = store.getState()
      res.send(renderPage(appHtml, initialState))
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(3000, () => {
  console.log('Production server running at localhost:3000')
})
