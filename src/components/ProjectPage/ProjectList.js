import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Project from './Project'
import styles from './ProjectList.sss'

@CSSModules(styles)
export default class ProjectList extends Component {
  render () {
    const data = [
      {
        id: 1,
        title: 'Dockerps',
        url: 'https://github.com/sadorlovsky/dockerps',
        description: 'Docker ps utility'
      },
      {
        id: 2,
        title: 'Rates',
        url: 'https://github.com/sadorlovsky/rates',
        description: 'Chrome extension'
      },
      {
        id: 3,
        title: 'SayHey',
        url: 'https://github.com/sadorlovsky/sayhey',
        description: 'websocket chat'
      },
      {
        id: 4,
        title: 'Dockerps',
        url: 'https://github.com/sadorlovsky/dockerps',
        description: 'Docker ps utility'
      },
      {
        id: 5,
        title: 'Rates',
        url: 'https://github.com/sadorlovsky/rates',
        description: 'Chrome extension'
      },
      {
        id: 6,
        title: 'SayHey',
        url: 'https://github.com/sadorlovsky/sayhey',
        description: 'websocket chat'
      }
    ]
    const projects = data.map(project => {
      return <Project key={project.id} {...project} />
    })
    return (
      <div styleName='list'>{ projects }</div>
    )
  }
}
