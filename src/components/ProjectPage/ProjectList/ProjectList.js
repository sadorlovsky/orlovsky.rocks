import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Project from '../Project/Project.js'
import styles from './ProjectList.sss'

@CSSModules(styles)
export default class ProjectList extends Component {
  render () {
    const data = [
      {
        id: 1,
        title: 'dockerps',
        url: 'https://github.com/sadorlovsky/dockerps',
        shortDescription: 'Pretty-print docker ps utility',
        fullDescription: '',
        style: {
          background: 'hsl(228, 7%, 29%)'
        }
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
