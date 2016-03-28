export function requestData () {
  return {
    type: 'REQUEST_DATA'
  }
}

export function loadData (data) {
  return {
    type: 'LOAD_DATA',
    data
  }
}

export function fetchData () {
  return dispatch => {
    dispatch(requestData())
    return fetch('/api/projects')
      .then(response => response.json())
      .then(projects => dispatch(loadData(projects)))
  }
}
