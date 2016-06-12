import React from 'react'
import css from 'react-css-modules'
import styles from './styles.sss'
import girl from './girl.svg'

const Lissie = () => {
  return (
    <div styleName='lissie'>
      <div styleName='title'>
        <img src={girl} />
        <h1>Lissie</h1>
      </div>
      <h2>CLI tool for generating LICENSE</h2>
      <div styleName='example'>
        <code>$ lissie mit -a "Zach Orlovsky" > LICENSE</code>
      </div>
      <div>
        <a styleName='link' href='https://npmjs.com/package/lissie'>npm</a>
        <span> · </span>
        <a styleName='link' href='https://github.com/sadorlovsky/lissie'>github</a>
      </div>
    </div>
  )
}

export default css(Lissie, styles)
