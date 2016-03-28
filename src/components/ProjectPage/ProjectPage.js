import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import ProjectList from './ProjectList/ProjectList.js'
import Nav from '../Nav/Nav.js'
import styles from './ProjectPage.sss'

@CSSModules(styles)
export default class ProjectPage extends Component {
  render () {
    return (
    <DocumentTitle title='Projects · Sad Orlovsky'>
      <div styleName='project-page'>
        {/*<Nav />*/}
        <ProjectList />
      </div>
    </DocumentTitle>
    )
  }
}
