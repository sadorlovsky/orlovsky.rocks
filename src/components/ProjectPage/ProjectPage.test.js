import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import ProjectPage from './ProjectPage.js'
import ProjectList from './ProjectList.js'

test('ProjectPage component renders ProjectList component', t => {
  const wrapper = shallow(<ProjectPage />)
  t.is(wrapper.find(ProjectList).length, 1)
})
