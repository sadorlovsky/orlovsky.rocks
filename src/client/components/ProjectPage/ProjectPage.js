import React from 'react'
import css from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import Nav from '../Nav/Nav'
import styles from './ProjectPage.sss'
import {
  Lissie,
  Dockerps,
  Codestyle,
  KinopoiskApi,
  CurrencyConverter
} from './projects'

const ProjectPage = () => {
  return (
    <DocumentTitle title='Projects · Sad Orlovsky'>
      <div>
        <Nav color='rgba(28,29,33,.7)' />
        <div styleName='project-page'>
          <Lissie />
          <Dockerps />
          <Codestyle />
          <KinopoiskApi />
          <CurrencyConverter />
        </div>
      </div>
    </DocumentTitle>
  )
}

export default css(ProjectPage, styles)
