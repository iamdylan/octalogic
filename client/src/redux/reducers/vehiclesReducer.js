const initialData = {
    vehicles: [],
    selectedVehicleName: "",
    selectedVehicleId: ""
}

export const vehiclesReducer = (state=initialData, action)=>{
    switch(action.type)
    {
        case 'GET_VEHICLES': {
            return {
                ...state,
                vehicles: action.payload
            }
        }
        case 'SELECTED_VEHICLE_NAME': {
            return {
                ...state,
                selectedVehicleName: action.payload
            }
        }
        case 'SELECTED_VEHICLE_ID': {
            return {
                ...state,
                selectedVehicleId: action.payload
            }
        }

        default: return state
    }
}