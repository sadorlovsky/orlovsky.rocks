import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import routes from './routes'

const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)
const history = syncHistoryWithStore(
  browserHistory, store
)

ReactDOM.render((
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>
), document.getElementById('root'))
