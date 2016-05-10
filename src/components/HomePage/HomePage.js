import React from 'react'
import css from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import GithubIcon from 'react-icons/fa/github'
import TwitterIcon from 'react-icons/fa/twitter'
import { Link } from 'react-router'
import Face from '../Face/Face'
import styles from './HomePage.sss'

const HomePage = () => {
  return (
    <DocumentTitle title='Sad Orlovsky'>
      <div styleName='home'>
        <div>
          <div styleName='logo'>
            <Face styleName='face' />
            <Link to='/'>ORLOVSKY</Link>
          </div>
          <div styleName='links'>
            <div>
              <Link to='/about'>About</Link>
            </div>
            <div>
              <Link to='/blog'>Blog</Link>
            </div>
            <div>
              <Link to='/projects'>Projects</Link>
            </div>
            <div>
              <a href='https://twitter.com/sadorlovsky'><TwitterIcon /></a>
            </div>
            <div>
              <a href='https://github.com/sadorlovsky'><GithubIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </DocumentTitle>
  )
}

export default css(HomePage, styles)
