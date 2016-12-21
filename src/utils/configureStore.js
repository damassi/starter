import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

export default function configureStore(rootReducer, initialState = {}) {
  return {
    ...createStore(rootReducer, initialState, applyMiddleware(createLogger())),
  };
}
