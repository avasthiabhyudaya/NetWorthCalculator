const initialState = {
    totalNetWorth: 0,
    goldDataList: [],
    goldTimeStamp: new Date(0)
}



export const ADD_GOLD_DATA = 'ADD_GOLD_DATA';
export const DELETE_GOLD_DATA = 'DELETE_GOLD_DATA';
export const UPDATE_GOLD_NW = 'UPDATE_GOLD_NW';
export const REINIT_GOLD_PROPS = 'REINIT_GOLD_PROPS';
export const UPDATE_GOLD_TIMESTAMP = 'UPDATE_GOLD_TIMESTAMP';

const GoldReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOLD_DATA:
        case DELETE_GOLD_DATA:
        case UPDATE_GOLD_NW:
            return { ...state, ...action.payload };
        case REINIT_GOLD_PROPS:
            return initialState;
        case UPDATE_GOLD_TIMESTAMP:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default GoldReducer