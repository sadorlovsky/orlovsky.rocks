import React from 'react'
import css from 'react-css-modules'
import styles from './styles.sss'

const Lissie = () => {
  return (
    <div styleName='lissie'>
      <h1>Lissie</h1>
      <h2>CLI tool for generating LICENSE</h2>
      <div>
        <a styleName='link' href='https://npmjs.com/package/lissie'>npm</a>
        <span> · </span>
        <a styleName='link' href='https://github.com/sadorlovsky/lissie'>github</a>
      </div>
    </div>
  )
}

export default css(Lissie, styles)
