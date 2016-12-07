import React from 'react'
import { Route, IndexRoute } from 'react-router'
import ProjectPage from './components/ProjectPage'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import Blog from './components/Blog'
import Root from './components/Root'

const routes = (
  <Route path='/' component={Root}>
    <IndexRoute component={HomePage} />
    <Route path='about' component={AboutPage} />
    <Route path='blog' component={Blog} />
    <Route path='projects' component={ProjectPage} />
  </Route>
)

export default routes
