import React from 'react'
import GithubIcon from 'react-icons/fa/github'
import css from 'react-css-modules'
import styles from './Project.sss'

const Project = props => {
  return (
    <div styleName='project'>
      <div styleName='inner'>
        <div>{props.title}</div>
        <div>
          <a href={props.github} styleName='github'>
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default css(Project, styles)
