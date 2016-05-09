import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import ProjectPage from './ProjectPage'
import ProjectList from './ProjectList/ProjectList'

test('ProjectPage component renders ProjectList component', t => {
  const wrapper = shallow(<ProjectPage />)
  t.is(wrapper.find(ProjectList).length, 1)
})
