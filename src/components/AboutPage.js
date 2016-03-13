import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import moment from 'moment'
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
      <div styleName='about'>
        <div>Hey!</div>
        <div>My name is <span styleName='name'>Zach Orlovsky</span></div>
        <div>i am { this.age() } years old</div>
        <div>live in Moscow</div>
        <div>and looks like this</div>
      </div>
    )
  }
}
