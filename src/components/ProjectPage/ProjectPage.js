import React from 'react'
import css from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import Nav from '../Nav/Nav'
import styles from './ProjectPage.sss'
import Lissie from './projects/lissie'
import Dockerps from './projects/dockerps'
import Codestyle from './projects/codestyle'

const ProjectPage = () => {
  return (
    <DocumentTitle title='Projects · Sad Orlovsky'>
      <div>
        <Nav />
        <div styleName='project-page'>
          <Lissie />
          <Dockerps />
          <Codestyle />
        </div>
      </div>
    </DocumentTitle>
  )
}

export default css(ProjectPage, styles)
