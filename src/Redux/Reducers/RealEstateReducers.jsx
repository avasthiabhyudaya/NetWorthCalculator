const initialState = {
    realEstateNetWorth: 0,
    realEstateDataList: [],
    realEstateTimeStamp: new Date(0)
}

export const ADD_REAL_ESTATE_DATA = 'ADD_REAL_ESTATE_DATA';
export const DELETE_REAL_ESTATE_DATA = 'DELETE_REAL_ESTATE_DATA';
export const UPDATE_REAL_ESTATE_NW = 'UPDATE_REAL_ESTATE_NW';
export const REINIT_REAL_ESTATE_PROPS = 'REINIT_REAL_ESTATE_PROPS';
export const UPDATE_REAL_ESTATE_TIMESTAMP = 'UPDATE_REAL_ESTATE_TIMESTAMP'

const RealEstateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REAL_ESTATE_DATA:
        case DELETE_REAL_ESTATE_DATA:
        case UPDATE_REAL_ESTATE_NW:
            return { ...state, ...action.payload };
        case REINIT_REAL_ESTATE_PROPS:
            return initialState;
        case UPDATE_REAL_ESTATE_TIMESTAMP:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default RealEstateReducer