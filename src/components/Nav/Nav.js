import React from 'react'
import css from 'react-css-modules'
import { Link } from 'react-router'
import Face from '../Face/Face'
import styles from './Nav.sss'

const Nav = () => {
  return (
    <div styleName='nav'>
      <div>
        <Link to='/'>
          <Face styleName='face' />
        </Link>
      </div>
    </div>
  )
}

export default css(styles, Nav)
