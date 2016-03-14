import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import GithubIcon from 'react-icons/lib/fa/github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import { Link } from 'react-router'
import styles from './HomePage.sss'

@CSSModules(styles)
export default class HomePage extends Component {
  render () {
    return (
      <div styleName='home'>
        <div styleName='logo'>
          <img styleName='face' src='../../../assets/images/sad-face.svg' />
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
    )
  }
}
