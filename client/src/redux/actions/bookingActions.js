import axios from 'axios';

export const bookVehicle = (reqData) => async dispatch => {
    dispatch({type: 'LOADING', payload: true});
    
    try {
        const response = await axios.post('/api/bookings/bookvehicle', reqData);
        console.log(response.status)
        if(response.status === 200) {
            dispatch({type: 'BOOKING_SUCCESS', payload: true});
        } else {
            dispatch({type: 'BOOKING_FAILURE', payload: true});
        }
        
        dispatch({type: 'LOADING', payload: false});
    } catch (error) {
        console.log(error);
        dispatch({type: 'LOADING', payload: false});
    }
}