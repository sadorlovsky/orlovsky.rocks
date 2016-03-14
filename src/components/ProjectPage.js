import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import ProjectList from './ProjectList'
import styles from './ProjectPage.sss'

@CSSModules(styles)
export default class ProjectPage extends Component {
  render () {
    return (
      <div styleName='projects'>
        <ProjectList />
      </div>
    )
  }
}
