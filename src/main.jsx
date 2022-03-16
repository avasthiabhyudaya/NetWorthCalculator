import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import { combineReducers, createStore } from 'redux'
import { PersistGate } from 'redux-persist/es/integration/react';

import GoldReducer from './Redux/Reducers/GoldReducer'
import TraditionalReducer from './Redux/Reducers/TraditionalReducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import { Provider } from 'react-redux'
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducers = {
  gold: GoldReducer,
  traditional: TraditionalReducer
}

const allReducers = persistCombineReducers({ key: 'nwc', storage }, rootReducers );

const store = createStore(allReducers, composeWithDevTools());

const persistor = persistStore( store );

ReactDOM.render(

  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
