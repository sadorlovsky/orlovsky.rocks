import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import Nav from '../Nav/Nav.js'
import styles from './Blog.sss'

@CSSModules(styles)
export default class Blog extends Component {
  render () {
    return (
      <DocumentTitle title='Blog · Sad Orlovsky'>
        <div>
          <Nav />
          <div styleName='blog'>There are no blog posts yet （´・ω・ `）</div>
        </div>
      </DocumentTitle>
    )
  }
}
