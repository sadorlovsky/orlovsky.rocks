import React from 'react'
import DocumentTitle from 'react-document-title'
import { css } from 'glamor'
import Nav from './Nav'

const styles = css({
  background: 'hsl(228, 7%, 81%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem'
})

const Projects = () => {
  return (
    <DocumentTitle title='Projects · Sad Orlovsky'>
      <div>
        <Nav />
        <div {...styles}>
          <a {...css({ color: '#000' })} href='https://github.com/sadorlovsky'>https://github.com/sadorlovsky</a>
        </div>
      </div>
    </DocumentTitle>
  )
}

export default Projects
