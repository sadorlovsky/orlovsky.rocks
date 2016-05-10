import React from 'react'
import css from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import Nav from '../Nav/Nav'
import styles from './ProjectPage.sss'

const Project = props => {
  return (
    <div>{props.name}</div>
  )
}

const ProjectPage = () => {
  return (
    <DocumentTitle title='Projects · Sad Orlovsky'>
      <div>
        <Nav />
        <div styleName='project-page'>
          <Project name='Lissie' />
        </div>
      </div>
    </DocumentTitle>
  )
}

export default css(ProjectPage, styles)
