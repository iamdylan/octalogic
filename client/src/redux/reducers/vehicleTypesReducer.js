const initialData = {
    vehicleTypes: [],
    selectedType: ""
}

export const vehicleTypesReducer = (state=initialData, action)=>{
    switch(action.type)
    {
        case 'GET_VEHICLE_TYPES': {
            return {
                ...state,
                vehicleTypes: action.payload,
            }
        }

        case 'SELECTED_VEHICLE_TYPE': {
            return {
                ...state,
                selectedType: action.payload
            }
        }

        default: return state
    }
}