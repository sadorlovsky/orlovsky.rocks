import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Project.sss'

@CSSModules(styles)
export default class Project extends Component {
  render () {
    return (
      <div styleName='project'>
        <h2>{ this.props.title }</h2>
        <a href={ this.props.url }> { this.props.url }</a>
        <p>{ this.props.description }</p>
      </div>
    )
  }
}
