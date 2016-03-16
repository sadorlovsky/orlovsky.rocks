import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './Nav.sss'
import Face from '../Face/Face.js'

@CSSModules(styles)
export default class Nav extends Component {
  render () {
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
}
