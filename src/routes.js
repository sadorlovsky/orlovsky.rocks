import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App/App.js'
import ProjectPage from './components/ProjectPage/ProjectPage.js'
import HomePage from './components/HomePage/HomePage.js'
import AboutPage from './components/AboutPage/AboutPage.js'
import Blog from './components/Blog/Blog.js'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='about' component={AboutPage} />
    <Route path='blog' component={Blog} />
    <Route path='projects(/:projectID)' component={ProjectPage} />
  </Route>
)
