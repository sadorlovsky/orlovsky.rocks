import React from 'react'
import css from 'react-css-modules'
import styles from './Root.sss'

const Root = ({ children }) => {
  return <div>{children}</div>
}

export default css(Root, styles)
