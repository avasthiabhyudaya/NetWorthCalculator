const initialState = {
    MFNetWorth: 0,
    MFDataList: [],
    MFTimeStamp: new Date(0)
}

export const ADD_MF_DATA = 'ADD_MF_DATA';
export const DELETE_MF_DATA = 'DELETE_MF_DATA';
export const UPDATE_MF_NW = 'UPDATE_MF_NW';
export const REINIT_MF_PROPS = 'REINIT_MF_PROPS';
export const UPDATE_MF_TIMESTAMP = 'UPDATE_MF_TIMESTAMP'

const MutualFundsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MF_DATA:
        case DELETE_MF_DATA:
        case UPDATE_MF_NW:
            return { ...state, ...action.payload };
        case REINIT_MF_PROPS:
            return initialState;
        case UPDATE_MF_TIMESTAMP:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default MutualFundsReducer