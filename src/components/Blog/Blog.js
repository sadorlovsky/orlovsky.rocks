import React from 'react'
import css from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import Nav from '../Nav/Nav'
import styles from './Blog.sss'

const Blog = () => {
  return (
    <DocumentTitle title='Blog · Sad Orlovsky'>
      <div>
        <Nav />
        <div styleName='blog'>There are no blog posts yet （´・ω・ `）</div>
      </div>
    </DocumentTitle>
  )
}

export default css(styles, Blog)
