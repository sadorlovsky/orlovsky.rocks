import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import express from 'express'
import routes from '../client/routes'

const app = express()

app.use('/static', express.static('dist'))

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
        <RouterContext {...props} />
      )
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not found')
    }
  })
})

app.listen(3000, () => {
  console.log('Production server running at localhost:3000')
})
