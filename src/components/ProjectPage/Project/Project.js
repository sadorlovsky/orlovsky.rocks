import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Markdown from 'react-markdown'
import styles from './Project.sss'

@CSSModules(styles)
export default class Project extends Component {
  render () {
    return (
      <div styleName='project' style={ this.props.style }>
        <div styleName='title'>{ this.props.title }</div>
        <div styleName='url'>
          <a href={ this.props.url }> { this.props.url }</a>
        </div>
        <div styleName='description'>
          <Markdown source={ this.props.description } />
        </div>
      </div>
    )
  }
}
