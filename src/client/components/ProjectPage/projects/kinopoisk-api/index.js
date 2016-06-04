import React from 'react'
import css from 'react-css-modules'
import styles from './kinopoisk-api.sss'

const KinopoiskApi = () => {
  return (
    <div>
      <h1>Kinopoisk API wrapper</h1>
      <div styleName='container'>
        <div styleName='node'>
          <h2>Node.js module</h2>
          <div styleName='links'>
            <a href='https://npmjs.com/package/kinopoisk-api'>npm</a>
            <span> · </span>
            <a href='https://github.com/sadorlovsky/kinopoisk-api'>github</a>
          </div>
        </div>
        <div styleName='ruby'>
          <h2>Ruby gem</h2>
          <div>
            coming soon
          </div>
        </div>
      </div>
    </div>
  )
}

export default css(KinopoiskApi, styles)
