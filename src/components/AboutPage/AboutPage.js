import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import Nav from '../Nav/Nav.js'
import styles from './AboutPage.sss'

@CSSModules(styles)
export default class AboutPage extends Component {
  render () {
    return (
    <DocumentTitle title='About · Sad Orlovsky'>
      <div styleName='about'>
        <Nav />
        <div styleName='text'>
          <div styleName='photo'></div>
          <p>Hey! My name is Zach Orlovsky.</p>
          <p>I am a developer from Moscow, currently write some <span styleName='js'>javascript</span> stuff,</p>
          <p>but i played with <span styleName='rb'>ruby</span> and <span styleName='rb'>rails</span> for some time.</p>
        </div>
      </div>
    </DocumentTitle>
    )
  }
}
