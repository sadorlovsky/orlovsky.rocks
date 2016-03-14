import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import App from './App.js'
import HomePage from '../HomePage/HomePage.js'

test('App component renders HomePage component', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find(HomePage).length, 1)
})
