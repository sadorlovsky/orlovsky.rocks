import React from 'react'
import DocumentTitle from 'react-document-title'
import randomItem from 'random-item'
import { css } from 'glamor'
import Nav from './Nav'

const emoji = [
  '🐹', '🐶', '🐼', '🐨', '🐔', '🐺', '🐡'
]

const styles = css({
  background: 'hsl(228, 7%, 81%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem'
})

const Blog = () => {
  return (
    <DocumentTitle title='Blog · Sad Orlovsky'>
      <div>
        <Nav />
        <div {...styles}>
          There are no blog posts yet {randomItem(emoji)}
        </div>
      </div>
    </DocumentTitle>
  )
}

export default Blog
