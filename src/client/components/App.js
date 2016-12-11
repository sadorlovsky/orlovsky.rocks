import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from '../routes'

const App = () => {
  return <Router routes={routes} history={browserHistory} />
}

export default App
