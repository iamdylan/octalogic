const initialData = {
    loading: false, // To be used for displaying a spinner when api requests are happening
    bookingSuccessMsg: false,
    bookingFailureMsg: false
};

export const alertsReducer = (state = initialData, action) => {
    switch(action.type) {
        case 'LOADING': {
            return {
                ...state,
                loading: action.payload
            }
        }
        case 'BOOKING_SUCCESS': {
            console.log('booking_success', action.payload)
            return {
                ...state,
                bookingSuccessMsg: action.payload
            }
        }
        case 'BOOKING_FAILURE': {
            return {
                ...state,
                bookingFailureMsg: action.payload
            }
        }
        default: return state
    }
}