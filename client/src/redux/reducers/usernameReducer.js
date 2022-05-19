const initialData = {
    firstName: "",
    lastName: ""
}

export const usernameReducer = (state=initialData, action)=>{
    switch(action.type)
    {
        case 'SET_FIRST_NAME': {
            return {
                ...state,
                firstName: action.payload
            }
        }
        case 'SET_LAST_NAME': {
            return {
                ...state,
                lastName: action.payload
            }
        }

        default: return state
    }
}