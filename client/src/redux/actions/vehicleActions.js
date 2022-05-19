import axios from 'axios';

export const getVehicles = (wheels, type) => async dispatch => {
    dispatch({type: 'LOADING', payload: true});
    
    try {
        let response;
        let endpoint;
        let data;

        if(wheels === '2') {
            endpoint = '/api/bikes/getallbikes';
        } else if (wheels === '4') {
            endpoint = '/api/cars/getallcars';
        }

        response = await axios.get(endpoint);

        data = response.data.filter(vehicle => {
            return vehicle.type === type;
        })

        dispatch({type: 'GET_VEHICLES', payload: data});

        // To have a default radio button selected in the "Vehicle model selection" view
        dispatch({type: 'SELECTED_VEHICLE_NAME', payload: response.data[0].name});
        dispatch({type: 'SELECTED_VEHICLE_ID', payload: response.data[0]._id});

        dispatch({type: 'LOADING', payload: false});
    } catch (error) {
        console.log(error);
        dispatch({type: 'LOADING', payload: false});
    }
}