var path = require('path')
var express = require('express')
var app = express()

app.use('/static', express.static('dist'))
app.use('/assets', express.static('assets'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

app.listen(3000, function () {
  console.log('Listening at http://localhost:3000/')
})
