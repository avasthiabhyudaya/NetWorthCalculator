const initialState = {
    traditionalNetWorth: 0,
    traditionalDataList: [],
    traditionalTimeStamp: new Date(0)
}

export const ADD_TRADITIONAL_DATA = 'ADD_TRADITIONAL_DATA';
export const DELETE_TRADITIONAL_DATA = 'DELETE_TRADITIONAL_DATA';
export const UPDATE_TRADITIONAL_DATA = 'UPDATE_TRADITIONAL_DATA';
export const UPDATE_TRADITIONAL_NW = 'UPDATE_TRADITIONAL_NW';
export const REINIT_TRADITIONAL_PROPS = 'REINIT_TRADITIONAL_PROPS';
export const UPDATE_TRADITIONAL_TIMESTAMP = 'UPDATE_TRADITIONAL_TIMESTAMP';

const TraditionalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRADITIONAL_DATA:
        case DELETE_TRADITIONAL_DATA:
        case UPDATE_TRADITIONAL_DATA:
        case UPDATE_TRADITIONAL_NW:
            return { ...state, ...action.payload };
        case REINIT_TRADITIONAL_PROPS:
            return initialState;
        case UPDATE_TRADITIONAL_TIMESTAMP:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default TraditionalReducer