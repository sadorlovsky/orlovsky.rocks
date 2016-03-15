import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import ProjectList from './ProjectList/ProjectList.js'
import Face from '../Face/Face.js'
import styles from './ProjectPage.sss'

@CSSModules(styles)
export default class ProjectPage extends Component {
  render () {
    return (
      <div styleName='project-page'>
        <div styleName='nav'>
          <Link to='/'>
            <Face styleName='face' />
          </Link>
        </div>
        <ProjectList />
      </div>
    )
  }
}
