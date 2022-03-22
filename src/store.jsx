import RealEstateReducer from './Redux/Reducers/RealEstateReducers'
import GoldReducer from './Redux/Reducers/GoldReducer'
import TraditionalReducer from './Redux/Reducers/TraditionalReducer'
import DashboardReducer from './Redux/Reducers/DashboardReducers'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'


const rootReducers = {
    gold: GoldReducer,
    traditional: TraditionalReducer,
    realestate: RealEstateReducer,
    dashboard: DashboardReducer
}

const allReducers = persistCombineReducers({ key: 'nwc', storage }, rootReducers);

export const store = createStore(allReducers, composeWithDevTools());

export const persistor = persistStore(store);