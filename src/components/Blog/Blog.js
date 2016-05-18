import React from 'react'
import css from 'react-css-modules'
import DocumentTitle from 'react-document-title'
import { sample } from 'lodash'
import Nav from '../Nav/Nav'
import styles from './Blog.sss'

const emoji = [
  '🐹', '🐶', '🐼', '🐨', '🐔', '🐺', '🐡'
]

const Blog = () => {
  return (
    <DocumentTitle title='Blog · Sad Orlovsky'>
      <div>
        <Nav />
        <div styleName='blog'>
          There are no blog posts yet {sample(emoji)}
        </div>
      </div>
    </DocumentTitle>
  )
}

export default css(Blog, styles)
