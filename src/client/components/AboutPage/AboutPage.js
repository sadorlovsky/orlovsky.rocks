import React from 'react'
import css from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import Nav from '../Nav/Nav'
import styles from './AboutPage.sss'

const AboutPage = () => {
  return (
    <DocumentTitle title='About · Sad Orlovsky'>
      <div styleName='about'>
        <Nav />
        <div styleName='text'>
          <div styleName='photo' />
          <p>Hey! My name is Zach Orlovsky.</p>
          <p>I am a developer from Moscow, currently write some <span styleName='js'>javascript</span> stuff,</p>
          <p>but i played with <span styleName='rb'>ruby</span> and <span styleName='rb'>rails</span> for a while.</p>
        </div>
      </div>
    </DocumentTitle>
  )
}

export default css(AboutPage, styles)
