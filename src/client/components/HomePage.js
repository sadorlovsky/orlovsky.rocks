import React from 'react'
import DocumentTitle from 'react-document-title'
import GithubIcon from 'react-icons/lib/fa/github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import { Link } from 'react-router'
import { css } from 'glamor'
import Face from './Face/Face'

const styles = {
  home: css({
    background: 'hsl(228, 7%, 12%)',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }),
  logo: css({
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '7vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '5px solid hsl(228, 7%, 81%)',
    paddingRight: '12px',
    transition: 'border-color .3s',
    ':hover': {
      borderColor: 'hsl(50, 74%, 61%)'
    }
  }),
  face: css({
    width: 'calc(7vw * 1.2)'
  }),
  links: css({
    display: 'flex',
    marginTop: '10px',
    justifyContent: 'space-between',
    fontSize: '1.1rem'
  }),
  link: css({
    color: 'hsl(228, 7%, 81%)',
    textDecoration: 'none',
    transition: 'color .3s'
  }),
  twitter: css({
    ':hover': {
      color: '#1da1f2'
    }
  }),
  github: css({
    ':hover': {
      color: '#fafafa'
    }
  })
}

const HomePage = () => {
  return (
    <DocumentTitle title='Sad Orlovsky'>
      <div {...styles.home}>
        <div>
          <div {...styles.logo}>
            <Face className={`${styles.face}`} />
            <Link className={`${styles.link} ${css({ color: '#fff' })}`} to='/'>ORLOVSKY</Link>
          </div>
          <div {...styles.links}>
            <div>
              <Link className={`${styles.link}`} to='/about'>About</Link>
            </div>
            <div>
              <Link className={`${styles.link}`} to='/blog'>Blog</Link>
            </div>
            <div>
              <Link className={`${styles.link}`} to='/projects'>Projects</Link>
            </div>
            <div>
              <a className={`${styles.link} ${styles.twitter}`} href='https://twitter.com/sadorlovsky'>
                <TwitterIcon />
              </a>
            </div>
            <div>
              <a className={`${styles.link} ${styles.github}`} href='https://github.com/sadorlovsky'>
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </DocumentTitle>
  )
}

export default HomePage
