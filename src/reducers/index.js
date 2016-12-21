import { combineReducers } from 'redux';

const initialState = {}
const R = (s = initialState, a) => s

export default combineReducers({
  a: R,
  b: R
})
