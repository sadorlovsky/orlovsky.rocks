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
        title: 'Dockerps',
        url: 'https://github.com/sadorlovsky/dockerps',
        description: 'Docker ps utility',
        style: {
          background: '#533745'
        }
      },
      {
        id: 2,
        title: 'SayHey',
        description: 'Chat App',
        style: {
          background: '#AB4E68'
        }
      },
      {
        id: 3,
        title: 'Rates',
        url: 'https://github.com/sadorlovsky/rates',
        style: {
          background: '#B07156'
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
