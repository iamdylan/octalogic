import axios from 'axios';

export const getVehicleTypes = (wheels) => async dispatch => {
    dispatch({type: 'LOADING', payload: true});
    
    try {
        let response;
        let endpoint;

        if(wheels === '4') {
            endpoint = '/api/cars/getcartypes';
        } else if (wheels === '2') {
            endpoint = '/api/bikes/getbiketypes';
        }

        response = await axios.get(endpoint);

        dispatch({type: 'GET_VEHICLE_TYPES', payload: response.data});

        // To have a default radio button selected in the "Vehicle type" view
        dispatch({type: 'SELECTED_VEHICLE_TYPE', payload: response.data[0].name});
        dispatch({type: 'LOADING', payload: false});
    } catch (error) {
        console.log(error);
        dispatch({type: 'LOADING', payload: false});
    }
}