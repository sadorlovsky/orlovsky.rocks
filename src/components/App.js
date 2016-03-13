import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import ReactTooltip from 'react-tooltip'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import styles from './App.sss'

@CSSModules(styles)
export default class App extends Component {
  render () {
    return (
      <div>
        <HomePage />
        <AboutPage />
      </div>
    )
  }
}
