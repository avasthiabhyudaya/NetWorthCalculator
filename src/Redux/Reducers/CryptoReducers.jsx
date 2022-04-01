const initialState = {
    cryptoNetWorth: 0,
    cryptoDataList: [],
    cryptoTimeStamp: new Date(0)
}



export const ADD_CRYPTO_DATA = 'ADD_CRYPTO_DATA';
export const DELETE_CRYPTO_DATA = 'DELETE_CRYPTO_DATA';
export const UPDATE_CRYPTO_NW = 'UPDATE_CRYPTO_NW';
export const REINIT_CRYPTO_PROPS = 'REINIT_CRYPTO_PROPS';
export const UPDATE_CRYPTO_TIMESTAMP = 'UPDATE_CRYPTO_TIMESTAMP';

const CryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CRYPTO_DATA:
        case DELETE_CRYPTO_DATA:
        case UPDATE_CRYPTO_NW:
            return { ...state, ...action.payload };
        case REINIT_CRYPTO_PROPS:
            return initialState;
        case UPDATE_CRYPTO_TIMESTAMP:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default CryptoReducer