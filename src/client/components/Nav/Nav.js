import React from 'react'
import css from 'react-css-modules'
import { Link } from 'react-router'
import Face from '../Face/Face'
import styles from './Nav.sss'

const Nav = props => {
  return (
    <div styleName='nav' style={{ background: props.color }}>
      <div>
        <Link to='/'>
          <Face styleName='face' />
        </Link>
      </div>
    </div>
  )
}

export default css(Nav, styles)
