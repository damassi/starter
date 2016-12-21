import React from 'react'
import Router from './Router'
import configureStore from 'utils/configureStore'
import rootReducer from 'reducers'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

const store = configureStore(rootReducer)

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
