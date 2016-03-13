import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import ReactTooltip from 'react-tooltip'
import styles from './App.sss'

@CSSModules(styles)
export default class App extends Component {
  render () {
    return (
      <div>
        <div styleName='header'>
          <div styleName='title'>
            <img styleName='face' src='../../assets/images/sad-face.svg' />
            ORLOVSKY
          </div>
        </div>
        <div styleName='about'>
          <div>Hey! My name is Zach Orlovsky</div>
        </div>
        <ReactTooltip place='bottom' />
      </div>
    )
  }
}
