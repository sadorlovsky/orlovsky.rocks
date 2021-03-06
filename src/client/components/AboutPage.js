import React from 'react'
import DocumentTitle from 'react-document-title'
import { css } from 'glamor'
import Nav from './Nav'

const styles = {
  about: css({
    background: 'hsl(228, 7%, 12%)',
    minHeight: '100vh'
  }),
  text: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    fontSize: '1.1rem',
    color: '#fff'
  }),
  photo: css({
    width: '200px',
    height: '200px',
    background: 'url(static/avatar.jpg)',
    backgroundSize: 'cover',
    borderRadius: '50%'
  }),
  js: css({
    color: '#FFB400'
  })
}

const AboutPage = () => {
  return (
    <DocumentTitle title='About · Sad Orlovsky'>
      <div {...styles.about}>
        <Nav />
        <div {...styles.text}>
          <div {...styles.photo} />
          <p>Hey! My name is Zach Orlovsky.</p>
          <p>I am a developer from Moscow. Currently I write some <span {...styles.js}>javascript</span> stuff.</p>
        </div>
      </div>
    </DocumentTitle>
  )
}

export default AboutPage
