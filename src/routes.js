import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App/App.js'
import ProjectPage from './components/ProjectPage/ProjectPage.js'
import HomePage from './components/HomePage/HomePage.js'
import AboutPage from './components/AboutPage/AboutPage.js'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='about' component={AboutPage} />
    <Route path='projects' component={ProjectPage} />
  </Route>
)
