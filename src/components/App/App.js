import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './App.sss'

@CSSModules(styles)
export default class App extends Component {
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
