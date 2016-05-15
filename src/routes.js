import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App/App'
import ProjectPage from './components/ProjectPage/ProjectPage'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import Blog from './components/Blog/Blog'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='about' component={AboutPage} />
    <Route path='blog' component={Blog} />
    <Route path='projects' component={ProjectPage} />
  </Route>
)

export default routes
