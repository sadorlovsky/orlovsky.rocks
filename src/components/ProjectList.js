import React, { Component } from 'react'
import Project from './Project'

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
      }
    ]
    const projects = data.map(project => {
      return <Project key={project.id} {...project} />
    })
    return (
      <div>{ projects }</div>
    )
  }
}
