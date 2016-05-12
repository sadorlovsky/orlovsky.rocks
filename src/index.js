import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'

const history = browserHistory

ReactDOM.render((
  <Router routes={routes} history={history} />
), document.getElementById('root'))
