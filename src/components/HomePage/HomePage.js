import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import DocumentTitle from 'react-document-title'
// import GithubIcon from 'react-icons/lib/fa/github'
// import TwitterIcon from 'react-icons/lib/fa/twitter'
import Face from '../Face/Face.js'
import { Link } from 'react-router'
import styles from './HomePage.sss'

@CSSModules(styles)
export default class HomePage extends Component {
  render () {
    return (
    <DocumentTitle title='Sad Orlovsky'>
      <div styleName='home'>
        <div styleName='container'>
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
              <a href='https://twitter.com/sadorlovsky'>Twitter</a>
            </div>
            <div>
              <a href='https://github.com/sadorlovsky'>Github</a>
            </div>
          </div>
        </div>
      </div>
    </DocumentTitle>
    )
  }
}
