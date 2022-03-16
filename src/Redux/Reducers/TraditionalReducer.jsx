const initialState = [
    {
        nickName: "Personal",
        bankName: "HDFC",
        accountNumber: "1234",
        instruments:
            [
                {
                    nickName: "Phone",
                    type: "Liquid",
                    rate: "7",
                    tenure: "N/A",
                    amount: "5000"
                }
            ],
        accountSum: "5000"
    },
    {
        nickName: "Current",
        bankName: "ICICI",
        accountNumber: "3456",
        instruments:
            [
                {
                    nickName: "Car",
                    type: "Debt",
                    rate: "4",
                    tenure: "N/A",
                    amount: "100000"
                }
            ],
        accountSum: "100000"
    }
]

const TraditionalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TRADITIONALDATA":
            state = [...state, action.payload]
            return state;
        case "DELETE_TRADITIONALDATA":
            state = [...state, state.filter(i => i.nickName !== action.payload.nickName)];
        default:
            return state;
    }
}

export default TraditionalReducer