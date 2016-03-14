import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './HomePage.sss'

@CSSModules(styles)
export default class HomePage extends Component {
  render () {
    return (
      <div styleName='home'>
        <div styleName='logo'>
          <img styleName='face' src='../../../assets/images/sad-face.svg' />
          ORLOVSKY
        </div>
      </div>
    )
  }
}
