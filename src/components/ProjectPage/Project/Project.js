import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import Markdown from 'react-markdown'
import styles from './Project.sss'

@CSSModules(styles)
export default class Project extends Component {
  render () {
    return (
      <div styleName='project'>
        <div styleName='inner'>
          <div>{this.props.title}</div>
        </div>
      </div>
    )
  }
}
