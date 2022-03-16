const initialState = {
    totalNetWorth: 0,
    goldDataList: []
}

// {
//     nickName: "ring",
//     weight: "2",
//     purity: "24K",
//     purchaseDate: "24/02/2022",
//     goldPrice: "54000"
// },
// {
//     nickName: "block",
//     weight: "100",
//     purity: "22K",
//     purchaseDate: "26/02/2022",
//     goldPrice: "54000"
// }


export const ADD_GOLD_DATA = 'ADD_GOLD_DATA';
export const DELETE_GOLD_DATA = 'DELETE_GOLD_DATA';
export const UPDATE_GOLD_NW = 'UPDATE_GOLD_NW';
export const REINIT_GOLD_PROPS = 'REINIT_GOLD_PROPS';

const GoldReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOLD_DATA:
        case DELETE_GOLD_DATA:
        case UPDATE_GOLD_NW:
            return { ...state, ...action.payload };
        case REINIT_GOLD_PROPS:
            return initialState;
        default:
            return state;
    }
}

export default GoldReducer