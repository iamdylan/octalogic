const initialData = {
    wheels: '2'
}

export const wheelsReducer = (state=initialData, action)=>{
    switch(action.type)
    {
        case 'SELECTED_WHEELS': {
            return {
                ...state,
                wheels: action.payload
            }
        }

        default: return state
    }
}