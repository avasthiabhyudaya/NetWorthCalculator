const initialState = [
    {
        nickName: "ring",
        weight: "2",
        purity: "24K",
        purchaseDate: "24/02/2022",
        goldPrice: "54000"
    },
    {
        nickName: "block",
        weight: "100",
        purity: "22K",
        purchaseDate: "26/02/2022",
        goldPrice: "54000"
    }
]

const GoldReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_GOLDDATA":
            state = [...state, action.payload]
            return state;
        case "DELETE_GOLDDATA":
            state = [...state, state.filter(i => i.nickName !== action.payload.nickName)];
        default:
            return state;
    }
}

export default GoldReducer