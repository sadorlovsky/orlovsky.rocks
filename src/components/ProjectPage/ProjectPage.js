import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import ProjectList from './ProjectList/ProjectList.js'
import Face from '../Face/Face.js'
import styles from './ProjectPage.sss'

@CSSModules(styles)
export default class ProjectPage extends Component {
  render () {
    return (
    <DocumentTitle title='Projects · Sad Orlovsky'>
      <div styleName='project-page'>
        <div styleName='nav'>
          <div>
            <Link to='/'>
              <Face styleName='face' />
            </Link>
          </div>
        </div>
        <ProjectList />
      </div>
    </DocumentTitle>
    )
  }
}
