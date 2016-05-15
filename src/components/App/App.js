import React from 'react'
import css from 'react-css-modules'
import styles from './App.sss'

const App = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default css(App, styles)
