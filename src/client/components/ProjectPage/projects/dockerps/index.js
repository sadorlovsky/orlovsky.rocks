import React from 'react'
import css from 'react-css-modules'
import styles from './styles.sss'
import docker from './docker.svg'

const Dockerps = () => {
  return (
    <div styleName='dockerps'>
      <div styleName='title'>
        <img styleName='logo' src={docker} />
        <h1>dockerps</h1>
      </div>
      <h2>human readable docker ps utility</h2>
      <div>
        <a style={{ color: 'hsl(352, 81%, 58%)' }} href='https://npmjs.com/package/dockerps'>npm</a>
        <span> · </span>
        <a style={{ color: 'hsl(352, 81%, 58%)' }} href='https://github.com/sadorlovsky/dockerps'>github</a>
      </div>
    </div>
  )
}

export default css(Dockerps, styles)
