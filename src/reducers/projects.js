import { handleActions } from 'redux-actions'

const initialState = {
  data: [],
  isFetching: false
}

const projects = handleActions({
  'FETCH_REQUEST': state => ({ ...state, isFetching: true }),
  'FETCH_SUCCESS': (state, action) => ({
    ...state,
    data: action.payload,
    isFetching: false
  })
}, initialState)

export default projects
