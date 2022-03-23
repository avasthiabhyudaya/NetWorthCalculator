const initialState = {
    totalNetWorth: 0,
    dashboardTimeStamp: new Date(0)
}

export const UPDATE_DASHBOARD_DATA = 'UPDATE_DASHBOARD_DATA';
export const UPDATE_DASHBOARD_TIMESTAMP = 'UPDATE_DASHBOARD_DATA';
export const REINIT_DASHBOARD_DATA = 'REINIT_DASHBOARD_DATA';


const DashboardReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_DASHBOARD_DATA:
            return { ...state, ...action.payload };
        case UPDATE_DASHBOARD_TIMESTAMP:
            return { ...state, ...action.payload };
        case REINIT_DASHBOARD_DATA:
            return initialState;
        default:
            return state;
    }
}

export default DashboardReducer