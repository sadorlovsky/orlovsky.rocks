import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import HomePage from './HomePage'

const wrapper = shallow(<HomePage />)

test('HomePage component is ok', t => {
  t.truthy(wrapper)
})
