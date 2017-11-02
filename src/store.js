import { createStore } from 'redux'
import { merge, append } from 'ramda'

const initialState = {
  newcolor: '',
  title: 'Colors',
  colors: ['Red', 'Green', 'Blue']
}

const rootReducer = (state = initialState, action) => {
  if (action.type === 'ADD_COLOR') {
    return merge(state, {
      newcolor: '',
      colors: append(action.payload, state.colors)
    })
  }
  if (action.type === 'SET_NEW_COLOR') {
    return merge(state, { newcolor: action.payload })
  }
  if (action.type === 'RESET_COLORS') {
    return initialState
  }
  return state
}

export default createStore(rootReducer)
