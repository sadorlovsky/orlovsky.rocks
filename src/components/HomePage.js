import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import GithubIcon from 'react-icons/lib/fa/github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import styles from './HomePage.sss'

@CSSModules(styles)
export default class HomePage extends Component {
  render () {
    return (
      <div styleName='home'>
        <div styleName='logo'>
          <img styleName='face' src='../../assets/images/sad-face.svg' />
          <a href='/'>ORLOVSKY</a>
        </div>
        <div styleName='links'>
          <div>
            <a href='/about'>About</a>
          </div>
          <div>
            <a href='/blog'>Blog</a>
          </div>
          <div>
            <a href='/projects'>Projects</a>
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
