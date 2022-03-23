import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter } from "react-router-dom"
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux'
import { store, persistor } from './store'


ReactDOM.render(

  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
