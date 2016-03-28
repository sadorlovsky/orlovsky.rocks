import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchData } from '../../../actions'
import Project from '../Project/Project.js'
import styles from './ProjectList.sss'

const mapStateToProps = state => {
  return {
    data: state.projects.data,
    isFetching: state.projects.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchData }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
export default class ProjectList extends Component {
  componentDidMount () {
    this.props.fetchData()
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.data !== this.props.data
  }

  render () {
    const projects = this.props.data.map(project => {
      return <Project key={project.id} {...project} />
    })
    return (
      <div styleName='list'>
        { projects }
      </div>
    )
  }
}
