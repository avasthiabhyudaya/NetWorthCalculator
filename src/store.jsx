import RealEstateReducer from './Redux/Reducers/RealEstateReducers'
import GoldReducer from './Redux/Reducers/GoldReducer'
import TraditionalReducer from './Redux/Reducers/TraditionalReducer'
import DashboardReducer from './Redux/Reducers/DashboardReducers'
import MutualFundsReducer from './Redux/Reducers/MutualFundsReducers'
import BondReducer from './Redux/Reducers/BondReducers'
import CryptoReducer from './Redux/Reducers/CryptoReducers'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'


const rootReducers = {
    gold: GoldReducer,
    traditional: TraditionalReducer,
    realestate: RealEstateReducer,
    dashboard: DashboardReducer,
    mutualFunds: MutualFundsReducer,
    bonds: BondReducer,
    crypto: CryptoReducer
}

const allReducers = persistCombineReducers({ key: 'nwc', storage }, rootReducers);

export const store = createStore(allReducers, composeWithDevTools());

export const persistor = persistStore(store);