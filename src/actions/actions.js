import { createAction } from 'redux-actions'

const fetchRequest = createAction('FETCH_REQUEST')
const fetchSuccess = createAction('FETCH_SUCCESS')
const fetchFailure = createAction('FETCH_FAILURE')

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchRequest())
    return fetch('/api/projects')
      .then(response => response.json())
      .then(projects => dispatch(fetchSuccess({ data: projects })))
      .catch(error => dispatch(fetchFailure(error)))
  }
}
