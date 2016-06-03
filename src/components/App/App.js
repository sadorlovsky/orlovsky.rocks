import React from 'react'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import useScroll from 'react-router-scroll'
import routes from '../../routes'

const App = () => {
  return (
    <Router
      routes={routes}
      history={browserHistory}
      render={applyRouterMiddleware(useScroll())}
    />
  )
}

export default App
