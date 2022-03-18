const initialState = {
    traditionalNetWorth: 0,
    traditionalDataList: []
}

// {
//     nickName: "Personal",
//     bankName: "HDFC",
//     accountNumber: "1234",
//     instruments:
//         [
//             {
//                 nickName: "Phone",
//                 type: "Liquid",
//                 rate: "7",
//                 tenure: "N/A",
//                 amount: "5000"
//             }
//         ],
//     accountSum: "5000"
// },
// {
//     nickName: "Current",
//     bankName: "ICICI",
//     accountNumber: "3456",
//     instruments:
//         [
//             {
//                 nickName: "Car",
//                 type: "Debt",
//                 rate: "4",
//                 tenure: "N/A",
//                 amount: "100000"
//             }
//         ],
//     accountSum: "100000"
// }

export const ADD_TRADITIONAL_DATA = 'ADD_TRADITIONAL_DATA';
export const DELETE_TRADITIONAL_DATA = 'DELETE_TRADITIONAL_DATA';
export const UPDATE_TRADITIONAL_DATA = 'UPDATE_TRADITIONAL_DATA';
export const UPDATE_TRADITIONAL_NW = 'UPDATE_TRADITIONAL_NW';
export const REINIT_TRADITIONAL_PROPS = 'REINIT_TRADITIONAL_PROPS';

const TraditionalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRADITIONAL_DATA:
        case DELETE_TRADITIONAL_DATA:
        case UPDATE_TRADITIONAL_DATA:
        case UPDATE_TRADITIONAL_NW:
            return { ...state, ...action.payload };
        // state = [...state, action.payload]
        // return state;
        // state = [...state, state.filter(i => i.nickName !== action.payload.nickName)];
        case REINIT_TRADITIONAL_PROPS:
            return initialState;
        default:
            return state;
    }
}

export default TraditionalReducer