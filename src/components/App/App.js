import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import HomePage from '../HomePage/HomePage.js'
import styles from './App.sss'

@CSSModules(styles)
export default class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={HomePage}></Route>
      </Router>
    )
  }
}
