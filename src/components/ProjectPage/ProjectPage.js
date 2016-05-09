import React from 'react'
import css from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import Nav from '../Nav/Nav'
import ProjectList from './ProjectList/ProjectList'
import styles from './ProjectPage.sss'

const ProjectPage = () => {
  return (
    <DocumentTitle title='Projects · Sad Orlovsky'>
      <div styleName='project-page'>
        <Nav />
        <ProjectList />
      </div>
    </DocumentTitle>
  )
}

export default css(styles, ProjectPage)
