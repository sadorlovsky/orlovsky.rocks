const initialState = {
  data: [],
  isFetching: false
}

export default function projects (state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, isFetching: true }
    case 'LOAD_DATA':
      const data = action.data
      return { ...state, data, isFetching: false }
    default:
      return state
  }
}
