import React from 'react'
import css from 'react-css-modules'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import useScroll from 'react-router-scroll'
import routes from '../../routes'
import styles from './App.sss'

const App = () => {
  return (
    <Router
      routes={routes}
      history={browserHistory}
      render={applyRouterMiddleware(useScroll())}
    />
  )
}

export default css(App, styles)
