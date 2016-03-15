import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import Face from '../Face/Face.js'
import styles from './AboutPage.sss'

@CSSModules(styles)
export default class AboutPage extends Component {
  age () {
    const today = moment()
    const birthday = moment(new Date(1994, 2, 26))
    return Math.round(today.diff(birthday, 'years', true))
  }

  render () {
    return (
    <DocumentTitle title='About · Sad Orlovsky'>
      <div styleName='about'>
        <div styleName='nav'>
          <div>
            <Link to='/'>
              <Face styleName='face' />
            </Link>
          </div>
        </div>
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
