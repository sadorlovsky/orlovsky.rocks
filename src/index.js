import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import useScroll from 'react-router-scroll'
import routes from './routes'

const history = browserHistory

ReactDOM.render((
  <Router
    routes={routes}
    history={history}
    render={applyRouterMiddleware(useScroll())}
  />
), document.getElementById('root'))
