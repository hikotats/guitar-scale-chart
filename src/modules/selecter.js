const SELECT_KEY = 'SELECT_KEY'
const SELECT_MODE = 'SELECT_MODE'

const initialState = {
  tonality: 'C',
  mode: 'Ionian'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_KEY': {
      return { ...state, tonality: action.payload }
    }
    case 'SELECT_MODE': {
      return { ...state, mode: action.payload }
    }
    default:
      return state
  }
}

export const selectKey = tonality => ({
  type: SELECT_KEY,
  payload: tonality
})

export const selectMode = mode => ({
  type: SELECT_MODE,
  payload: mode
})
