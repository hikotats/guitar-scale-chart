import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import selecter from './modules/selecter'
import App from './components/index'

let store = createStore(selecter)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('scale-chart')
)
