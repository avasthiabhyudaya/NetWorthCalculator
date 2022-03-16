import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import { combineReducers, createStore } from 'redux'
import GoldReducer from './Redux/Reducers/GoldReducer'
import TraditionalReducer from './Redux/Reducers/TraditionalReducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  gold: GoldReducer,
  traditional: TraditionalReducer
})

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
