import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import ProjectPage from '../ProjectPage/ProjectPage'
import App from './App'

test('App component renders ProjectPage component', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find(ProjectPage).length, 1)
})
