const initialData = {
    from: "",
    to: ""
}

export const slotsReducer = (state=initialData, action)=>{
    switch(action.type)
    {
        case 'SET_FROM_SLOT': {
            return {
                ...state,
                from: action.payload
            }
        }
        case 'SET_TO_SLOT': {
            return {
                ...state,
                to: action.payload
            }
        }

        default: return state
    }
}