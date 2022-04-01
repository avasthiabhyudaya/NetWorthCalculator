const initialState = {
    bondNetWorth: 0,
    bondDataList: [],
    bondTimeStamp: new Date(0)
}



export const ADD_BOND_DATA = 'ADD_BOND_DATA';
export const DELETE_BOND_DATA = 'DELETE_BOND_DATA';
export const UPDATE_BOND_NW = 'UPDATE_BOND_NW';
export const REINIT_BOND_PROPS = 'REINIT_BOND_PROPS';
export const UPDATE_BOND_TIMESTAMP = 'UPDATE_BOND_TIMESTAMP';

const BondReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOND_DATA:
        case DELETE_BOND_DATA:
        case UPDATE_BOND_NW:
            return { ...state, ...action.payload };
        case REINIT_BOND_PROPS:
            return initialState;
        case UPDATE_BOND_TIMESTAMP:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default BondReducer