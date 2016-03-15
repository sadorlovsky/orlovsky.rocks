import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import ProjectPage from '../ProjectPage/ProjectPage.js'
import HomePage from '../HomePage/HomePage.js'
import AboutPage from '../AboutPage/AboutPage.js'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import styles from './App.sss'

@CSSModules(styles)
export default class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/projects' component={ProjectPage} />
      </Router>
    )
  }
}
